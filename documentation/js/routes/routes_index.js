var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","loadChildren":"./layout/layout.module#LayoutModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/layout/layout-routing.module.ts","module":"LayoutRoutingModule","children":[{"path":"","component":"LayoutComponent","children":[{"path":"","redirectTo":"search"},{"path":"search","loadChildren":"./search/search.module#SearchModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/layout/search/search-routing.module.ts","module":"SearchRoutingModule","children":[{"path":"","component":"SearchComponent"}],"kind":"module"}],"module":"SearchModule"}]},{"path":"users","loadChildren":"./users/users.module#UsersModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/layout/users/users-routing.module.ts","module":"UsersRoutingModule","children":[{"path":"","component":"UsersComponent"}],"kind":"module"}],"module":"UsersModule"}]}]}],"kind":"module"}],"module":"LayoutModule"}]}],"kind":"module"}]}
