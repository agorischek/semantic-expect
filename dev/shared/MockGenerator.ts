export class MockGenerator {
  private current: number = 0;
  constructor(private options: string[]) {}
  generate() {
    const selection = this.options[this.current % this.options.length];
    console.log(selection);
    this.current += 1;
    return selection;
  }
}
