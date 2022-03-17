import { Module } from "@nestjs/common";
import { DirectorResolver } from "./director.resolver";
import { DirectorService } from "./director.service";
import { MongooseModule } from "@nestjs/mongoose";
import { DirectorSchema } from "./director.model";

@Module({
  providers: [DirectorResolver, DirectorService],
  imports: [
    MongooseModule.forFeature([
      {
        name: "Director",
        schema: DirectorSchema,
      },
    ]),
  ],
})
export class DirectorModule {}
