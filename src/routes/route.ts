import { NextFunction, Request, Response } from "express";


/**
 * BaseRoute class
 * 
 * @export
 * @class BaseRoute
 */
export class BaseRoute {
  protected title: string;
  private scripts: string[];



  /**
   * Creates an instance of BaseRoute.
   * @memberof BaseRoute
   */
  constructor() {
    // initialize variables
    this.title = "Playlists";
    this.scripts = [];
  }


  /**
   * Add a JS external file to the request
   * 
   * @param {string} src The src to the external JS file
   * @returns {BaseRoute} Self for chaining
   * @memberof BaseRoute
   */
  public addScript(src: string): BaseRoute {
    this.scripts.push(src);
    return this;
  }


  /**
   * Renders a page.
   * 
   * @param {Request} req The request object.
   * @param {Response} res The response object.
   * @param {string} view the view to render.
   * @param {Object} [options] Additional options to append to the view's local scope.
   * @memberof BaseRoute
   */
  public render(req: Request, res: Response, view: string, options?: Object) {
    // add constants
    res.locals.BASE_URL = "/";

    // add scripts
    res.locals.scripts = this.scripts;

    // add title
    res.locals.title = this.title;

    // render view
    res.render(view, options);
  }
}
