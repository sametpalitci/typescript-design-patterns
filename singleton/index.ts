class Singleton {
  counter = 0;
  private static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public increase() {
    ++this.counter;
  }

  public decrease() {
    --this.counter;
  }
}

(() => {
  const singleton = Singleton.getInstance();
  Singleton.getInstance().increase();
  console.log(singleton.counter);
})();
