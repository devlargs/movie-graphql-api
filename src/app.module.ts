import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";
import { UserModule } from "./modules/user/user.module";
import { MongooseModule } from "@nestjs/mongoose";
import { DirectorModule } from "./modules/director/director.module";
import { MovieModule } from "./modules/movie/movie.module";
import { GenreModule } from "./modules/genre/genre.module";
import { ConfigModule } from "@nestjs/config";

console.log("Current Version ======> v1.2.0");

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      cors: {
        origin: "http://localhost:3000", // Tell front end to use this port
        credentials: true,
      },
      introspection: JSON.parse(process.env.INTROSPECTION),
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
      buildSchemaOptions: {
        numberScalarMode: "integer",
      },
    }),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_URL, {
      autoIndex: true,
    }),
    GenreModule,
    MovieModule,
    DirectorModule,
    UserModule,
  ],
})
export class AppModule {}
