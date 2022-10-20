import { Controller } from "@tsed/di";
import { Get } from "@tsed/schema";

@Controller("/")
export class HelloWorldController {
  @Get("/")
  get() {
    return 1 / 0;
  }
}
