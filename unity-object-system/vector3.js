export default class Vector3 {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
    }
  
    static get back() {
      return new Vector3(0, 0, -1);
    }
  
    static get down() {
      return new Vector3(0, -1, 0);
    }
  
    static get forward() {
      return new Vector3(0, 0, 1);
    }
  
    static get left() {
      return new Vector3(-1, 0, 0);
    }
  
    static get negativeInfinity() {
      return new Vector3(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
    }
  
    static get one() {
      return new Vector3(1, 1, 1);
    }
  
    static get positiveInfinity() {
      return new Vector3(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
    }
  
    static get right() {
      return new Vector3(1, 0, 0);
    }
  
    static get up() {
      return new Vector3(0, 1, 0);
    }
  
    static get zero() {
      return new Vector3(0, 0, 0);
    }
  
    get magnitude() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
  
    get normalized() {
      const magnitude = this.magnitude;
      return new Vector3(this.x / magnitude, this.y / magnitude, this.z / magnitude);
    }
  
    get sqrMagnitude() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
  
    set(index, value) {
      switch (index) {
        case 0:
          this.x = value;
          break;
        case 1:
          this.y = value;
          break;
        case 2:
          this.z = value;
          break;
        default:
          throw new Error(`Invalid index for Vector3: ${index}`);
      }
    }
  
    toString() {
      return `(${this.x}, ${this.y}, ${this.z})`;
    }
  
    static angle(from, to) {
      const dot = Vector3.dot(from.normalized, to.normalized);
      return Math.acos(dot) * (180 / Math.PI);
    }
  
    static clampMagnitude(vector, maxLength) {
      const magnitude = vector.magnitude;
      if (magnitude > maxLength) {
        const normalized = vector.normalized;
        return new Vector3(normalized.x * maxLength, normalized.y * maxLength, normalized.z * maxLength);
      }
      return vector;
    }
  
    static cross(lhs, rhs) {
      return new Vector3(lhs.y * rhs.z - lhs.z * rhs.y, lhs.z * rhs.x - lhs.x * rhs.z, lhs.x * rhs.y - lhs.y * rhs.x);
    }
  
    static distance(a, b) {
      const diffX = b.x - a.x;
      const diffY = b.y - a.y;
      const diffZ = b.z - a.z;
      return Math.sqrt(diffX * diffX + diffY * diffY + diffZ * diffZ);
    }
  
    static dot(lhs, rhs) {
      return lhs.x * rhs.x + lhs.y * rhs.y + lhs.z * rhs.z;
    }
  
    static lerp(from, to, t) {
      return new Vector3(
        from.x + (to.x - from.x) * t,
        from.y + (to.y - from.y) * t,
        from.z + (to.z - from.z) * t
      );
    }
  
    static lerpUnclamped(from, to, t) {
      return new Vector3(
        from.x + (to.x - from.x) * t,
        from.y + (to.y - from.y) * t,
        from.z + (to.z - from.z) * t
      );
    }
  
    static max(lhs, rhs) {
      return new Vector3(Math.max(lhs.x, rhs.x), Math.max(lhs.y, rhs.y), Math.max(lhs.z, rhs.z));
    }
  
    static min(lhs, rhs) {
      return new Vector3(Math.min(lhs.x, rhs.x), Math.min(lhs.y, rhs.y), Math.min(lhs.z, rhs.z));
    }
  
    static moveTowards(current, target, maxDistanceDelta) {
      const diffX = target.x - current.x;
      const diffY = target.y - current.y;
      const diffZ = target.z - current.z;
      const magnitude = Math.sqrt(diffX * diffX + diffY * diffY + diffZ * diffZ);
      if (magnitude <= maxDistanceDelta || magnitude === 0) {
        return target;
      }
      const t = maxDistanceDelta / magnitude;
      return new Vector3(current.x + diffX * t, current.y + diffY * t, current.z + diffZ * t);
    }
  
    static normalize(vector) {
      const magnitude = vector.magnitude;
      return new Vector3(vector.x / magnitude, vector.y / magnitude, vector.z / magnitude);
    }
  
    static orthoNormalize(normal, tangent) {
      const normalNormalized = normal.normalized;
      const dot = Vector3.dot(tangent, normalNormalized);
      const tangentOrthogonal = new Vector3(tangent.x - normalNormalized.x * dot, tangent.y - normalNormalized.y * dot, tangent.z - normalNormalized.z * dot).normalized;
      return [normalNormalized, tangentOrthogonal];
    }
  
    static project(vector, onNormal) {
      const normalNormalized = onNormal.normalized;
      const dot = Vector3.dot(vector, normalNormalized);
      return new Vector3(normalNormalized.x * dot, normalNormalized.y * dot, normalNormalized.z * dot);
    }
  
    static projectOnPlane(vector, planeNormal) {
      const projection = Vector3.project(vector, planeNormal);
      return new Vector3(vector.x - projection.x, vector.y - projection.y, vector.z - projection.z);
    }
  
    static reflect(inDirection, inNormal) {
      const normal = inNormal.normalized;
      const dot = Vector3.dot(inDirection, normal);
      return new Vector3(inDirection.x - 2 * dot * normal.x, inDirection.y - 2 * dot * normal.y, inDirection.z - 2 * dot * normal.z);
    }
  
    static rotateTowards(current, target, maxRadiansDelta, maxMagnitudeDelta) {
      const currentNormalized = current.normalized;
      const targetNormalized = target.normalized;
      const dot = Vector3.dot(currentNormalized, targetNormalized);
      if (dot > 1 - MathUtils.Epsilon) {
        return target;
      }
      const angle = Math.acos(dot);
      const t = Math.min(1, maxRadiansDelta / angle);
      const newDirection = Vector3.slerpUnclamped(currentNormalized, targetNormalized, t);
      const newMagnitude = MathUtils.lerp(current.magnitude, target.magnitude, maxMagnitudeDelta);
      return new Vector3(newDirection.x * newMagnitude, newDirection.y * newMagnitude, newDirection.z * newMagnitude);
    }
  
    static scale(a, b) {
      return new Vector3(a.x * b.x, a.y * b.y, a.z * b.z);
    }
  
    static signedAngle(from, to, axis) {
      const unsignedAngle = Vector3.angle(from, to);
      const cross = Vector3.cross(from, to);
      const dot = Vector3.dot(axis, cross);
      return Math.sign(dot) * unsignedAngle;
    }
  
    static slerp(from, to, t) {
      const angle = Vector3.angle(from, to);
      if (angle === 0) {
        return from;
      }
      const sinAngle = Math.sin(angle);
      const fromWeight = Math.sin((1 - t) * angle) / sinAngle;
      const toWeight = Math.sin(t * angle) / sinAngle;
      return new Vector3(
        from.x * fromWeight + to.x * toWeight,
        from.y * fromWeight + to.y * toWeight,
        from.z * fromWeight + to.z * toWeight
      );
    }
  
    static slerpUnclamped(from, to, t) {
      const angle = Vector3.angle(from, to);
      if (angle === 0) {
        return from;
      }
      const sinAngle = Math.sin(angle);
      const fromWeight = Math.sin((1 - t) * angle) / sinAngle;
      const toWeight = Math.sin(t * angle) / sinAngle;
      return new Vector3(
        from.x * fromWeight + to.x * toWeight,
        from.y * fromWeight + to.y * toWeight,
        from.z * fromWeight + to.z * toWeight
      );
    }
  
    static smoothDamp(current, target, currentVelocity, smoothTime, maxSpeed, deltaTime) {
      smoothTime = Math.max(0.0001, smoothTime);
      const num = 2 / smoothTime;
      const num2 = num * deltaTime;
      const num3 = 1 / (1 + num2 + 0.48 * num2 * num2 + 0.235 * num2 * num2 * num2);
      let vector = new Vector3(
        currentVelocity.x * deltaTime,
        currentVelocity.y * deltaTime,
        currentVelocity.z * deltaTime
      );
      let vector2 = new Vector3(target.x - current.x, target.y - current.y, target.z - current.z);
      const maxLength = maxSpeed * smoothTime;
      vector2 = Vector3.clampMagnitude(vector2, maxLength);
      target = new Vector3(current.x + vector2.x, current.y + vector2.y, current.z + vector2.z);
      let vector3 = new Vector3(
        currentVelocity.x + (num * vector2.x) * deltaTime,
        currentVelocity.y + (num * vector2.y) * deltaTime,
        currentVelocity.z + (num * vector2.z) * deltaTime
      );
      vector = Vector3.clampMagnitude(vector3, maxLength);
      currentVelocity = new Vector3(
        currentVelocity.x - (num * vector.x) * deltaTime,
        currentVelocity.y - (num * vector.y) * deltaTime,
        currentVelocity.z - (num * vector.z) * deltaTime
      );
      const vector4 = new Vector3(current.x + (vector.x + vector3.x) * num3, current.y + (vector.y + vector3.y) * num3, current.z + (vector.z + vector3.z) * num3);
      if (
        (target.x - current.x > 0) === (vector4.x - target.x > 0) ||
        (target.y - current.y > 0) === (vector4.y - target.y > 0) ||
        (target.z - current.z > 0) === (vector4.z - target.z > 0)
      ) {
        vector4.x = target.x;
        vector4.y = target.y;
        vector4.z = target.z;
        currentVelocity.x = 0;
        currentVelocity.y = 0;
        currentVelocity.z = 0;
      }
      return [vector4, currentVelocity];
    }
  }
  