declare function async(generator: Generator<any[], any, any>): (...args: any[]) => Promise<any>;

export = async;
