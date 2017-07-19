import * as Express from "express";
import { IndexRoute } from "./routes/index";
import { PlaylistsRoute } from "./routes/api/playlists";

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const logger = require("morgan");
const path = require("path");
const errorHandler = require("errorhandler");
const methodOverride = require("method-override");

/**
 * The server.
 * 
 * @class Server
 */
export class Server {
  public app: Express.Application;

  /**
   * Bootstrap the application.
   * 
   * @class Server
   * @method bootstrap
   * @static
   * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
   */
  public static bootstrap(): Server {
    return new Server();
  }

  /**
   * Constructor
   * 
   * @class Server
   * @constructor
   */
  constructor() {
    // create expressjs application
    this.app = express();
    // configure application
    this.config();
    // add routes
    this.routes();
    // add api
    this.api();
  }

  /**
   * Create REST API routes
   * 
   * @class Server
   * @method api
   */
  public api() {
    const router = Express.Router();
    PlaylistsRoute.create(router);
    // use router middleware
    this.app.use(router);
  }

  /**
   * Create router
   * 
   * @class Server
   * @method routes
   */
  public routes() {
    const router = Express.Router();
    // IndexRoute
    IndexRoute.create(router);
    // use router middleware
    this.app.use(router);
  }

  /**
   * Configure application
   * 
   * @class Server
   * @method config
   */
  public config() {
    // add static paths
    this.app.use(express.static(path.join(__dirname, "public")));

    // configure pug
    this.app.set("views", path.join(__dirname, "views"));
    this.app.set("view engine", "pug");

    // use logger middleware
    this.app.use(logger("dev"));

    // use json form parser middleware
    this.app.use(bodyParser.json());

    // use query string parser middleware
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));

    // use cookie parser middleware
    this.app.use(cookieParser("SECRET_GOES_HERE"));

    // use override middleware
    this.app.use(methodOverride());

    // catch 404 and forward to error handler
    this.app.use(function (err: any, req: Express.Request, res: Express.Response, next: Express.NextFunction) {
      err.status = 404;
      next(err);
    });

    // error handling
    this.app.use(errorHandler());
  }
}
