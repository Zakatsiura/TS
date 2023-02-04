interface Animals {
  name: string;
  walk: () => boolean;
  fly: () => boolean;
  swim: () => boolean;
  sound: () => string;
  nightVision?: () => boolean;
  legs?: () => number;
}

class Cat implements Animals {
  name: string = 'Description';

  walk(): boolean {
    return true;
  }
  fly(): boolean {
    return false;
  }
  swim(): boolean {
    return false;
  }
  sound(): string {
    return 'Miau';
  }
  nightVision(): boolean {
    return true;
  }
  legs(): number {
    return 4;
  }
  tail(): boolean {
    return true;
  }
}

class Bird implements Animals {
  name: string = 'Description';

  walk(): boolean {
    return false;
  }
  fly(): boolean {
    return true;
  }
  swim(): boolean {
    return false;
  }
  sound(): string {
    return 'Different types';
  }
  tail(): boolean {
    return true;
  }
  wings(): boolean {
    return true;
  }
}

class Fish implements Animals {
  name: string = 'Description';

  walk(): boolean {
    return false;
  }
  fly(): boolean {
    return false;
  }
  swim(): boolean {
    return true;
  }
  sound(): string {
    return 'Special sounds';
  }
  tail(): boolean {
    return true;
  }
  wings(): boolean {
    return false;
  }
  fins(): boolean {
    return true;
  }
}

console.log(Fish);
