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

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
      buildSchemaOptions: {
        numberScalarMode: "integer",
      },
    }),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_URI, {
      autoIndex: true,
    }),
    GenreModule,
    MovieModule,
    DirectorModule,
    UserModule,
  ],
})
export class AppModule {}
