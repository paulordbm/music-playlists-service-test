import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";


/**
 * / route
 * 
 * @export
 * @class IndexRoute
 * @extends {BaseRoute}
 */
export class IndexRoute extends BaseRoute {

  /**
   * Create the routes.
   * 
   * @static
   * @param {Router} router 
   * @memberof IndexRoute
   */
  public static create(router: Router) {
    // log
    console.log("[IndexRoute::create] Creating index route.");

    // add home page route
    router.get("/", (req: Request, res: Response, next: NextFunction) => {
      new IndexRoute().index(req, res, next);
    });
  }


  /**
   * Creates an instance of IndexRoute.
   * @memberof IndexRoute
   */
  constructor() {
    super();
  }


  /**
   * The home page route.
   * 
   * @param {Request} req 
   * @param {Response} res 
   * @param {NextFunction} next 
   * @memberof IndexRoute
   */
  public index(req: Request, res: Response, next: NextFunction) {
    // set custom title
    this.title = "Home | Playlists";

    // set options
    const options: Object = {
      "message": "Welcome to Playlists"
    };

    // render template
    this.render(req, res, "index", options);
  }
}
