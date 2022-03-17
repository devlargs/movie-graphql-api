import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";
import { UserModule } from "./modules/user/user.module";
import { DirectorModule } from "./modules/director/director.module";
import { MongooseModule } from "@nestjs/mongoose";
import { MovieModule } from "./modules/movies/movie.module";

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
    MongooseModule.forRoot("mongodb://localhost/nest"),
    MovieModule,
    DirectorModule,
    UserModule,
  ],
})
export class AppModule {}
