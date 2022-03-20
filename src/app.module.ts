import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";
import { UserModule } from "./modules/user/user.module";
import { MongooseModule } from "@nestjs/mongoose";
import { DirectorModule } from "./modules/director/director.module";
import { MovieModule } from "./modules/movie/movie.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
      buildSchemaOptions: {
        numberScalarMode: "integer",
      },
    }),
    MongooseModule.forRoot("mongodb://127.0.0.1:27017/movies-dev"),
    MovieModule,
    DirectorModule,
    UserModule,
  ],
})
export class AppModule {}
