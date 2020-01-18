/**
 * Interface describing options for serving static assets.
 *
 * @see [Serving static files in Koa](https://koajs.com/en/starter/static-files.html)
 * @see [Model-View-Controller](https://docs.nestjs.com/techniques/mvc)
 *
 * @publicApi
 */
export interface ServeStaticOptions {
  maxage?: number;
  hidden?: boolean;
  index?: string | false;
  defer?: boolean;
  gzip?: boolean;
  br?: boolean;
  extensions?: string[] | false;
  setHeaders?: (res: any, path: string, stat: any) => any;
}
