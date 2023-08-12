import { Hono } from 'hono';
import worksJson from '$lib/assets/json/works.json';
import circleJson from '$lib/assets/json/circle.json';
import linksJson from '$lib/assets/json/links.json';

export const apiApp = new Hono();

const apiRoute = apiApp
  .get('/works', (ctx) => {
    return ctx.jsonT([...worksJson, ...circleJson]);
  })
  .get('/links', (ctx) => {
    return ctx.jsonT(linksJson);
  });

export type ApiRoute = typeof apiRoute;
