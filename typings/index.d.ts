import 'egg';
declare module 'egg' {
 interface Application {
  nuxt: any;
  nuxtBuilder: any;
 }
 interface Nuxt {
   [s]: any;
 }
}