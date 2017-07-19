import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "../route";

const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', '..', 'consts', 'playlists.json');

/**
 * /api/playlists route
 * 
 * @export
 * @class PlaylistsRoute
 * @extends {BaseRoute}
 */
export class PlaylistsRoute extends BaseRoute {

  /**
   * Create the routes.
   * 
   * @static
   * @param {Router} router 
   * @memberof PlaylistsRoute
   */
  public static create(router: Router) {
    // log
    console.log("[PlaylistsRoute::create] Creating playlists route.");

    // add playlists api route
    router.get("/api/playlists", (req: Request, res: Response, next: NextFunction) => {
      new PlaylistsRoute().index(req, res, next);
    });
  }


  /**
   * Creates an instance of PlaylistsRoute.
   * @memberof PlaylistsRoute
   */
  constructor() {
    super();
  }


  /**
   * The playlists api route.
   * 
   * @param {Request} req 
   * @param {Response} res 
   * @param {NextFunction} next 
   * @memberof PlaylistsRoute
   */
  public index(req: Request, res: Response, next: NextFunction) {
    fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
      if (!err) {
        console.log('[PlaylistsRoute::index] Read data from json file successfully.');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(data);
        res.end();
        // res.json(data); TODO: find out why this doesn't work :p
      } else {
        console.error(err);
        res.json({ error: true });
      }
    });
  }
}
