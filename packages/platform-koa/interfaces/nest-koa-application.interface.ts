import { INestApplication } from '@nestjs/common';
import { ServeStaticOptions } from './serve-static-options.interface';

/**
 * Interface describing methods on NestKoaApplication.
 *
 * @see [Platform](https://docs.nestjs.com/first-steps#platform)
 *
 * @publicApi
 */
export interface NestKoaApplication extends INestApplication {
  /**
   * A wrapper function around native `koa.set()` method.
   *
   * @example
   * app.set('trust proxy', 'loopback')
   *
   * @returns {this}
   */
  set(...args: any[]): this;

  /**
   * A wrapper function around native `koa.engine()` method.
   * @example
   * app.engine('mustache', mustacheKoa())
   *
   * @returns {this}
   */
  engine(...args: any[]): this;

  /**
   * A wrapper function around native `koa.enable()` method.
   * @example
   * app.enable('x-powered-by')
   *
   * @returns {this}
   */
  enable(...args: any[]): this;

  /**
   * A wrapper function around native `koa.disable()` method.
   *
   * @example
   * app.disable('x-powered-by')
   *
   * @returns {this}
   */
  disable(...args: any[]): this;

  useStaticAssets(options: ServeStaticOptions): this;
  /**
   * Sets a base directory for public assets.
   * @example
   * app.useStaticAssets('public')
   *
   * @returns {this}
   */
  useStaticAssets(path: string, options?: ServeStaticOptions): this;

  /**
   * Sets one or multiple base directories for templates (views).
   *
   * @example
   * app.setBaseViewsDir('views')
   *
   * @returns {this}
   */
  setBaseViewsDir(path: string | string[]): this;

  /**
   * Sets a view engine for templates (views).
   * @example
   * app.setViewEngine('pug')
   *
   * @returns {this}
   */
  setViewEngine(engine: string): this;
}
