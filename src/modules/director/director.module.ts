import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { Director, DirectorSchema } from "./director.model";
import { DirectorService } from "./director.service";
import { DirectorResolver } from "./director.resolver";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Director.name, schema: DirectorSchema },
    ]),
  ],
  providers: [DirectorService, DirectorResolver],
})
export class DirectorModule {}
