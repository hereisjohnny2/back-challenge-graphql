/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Float, ObjectType } from "type-graphql";

import { User } from "../../user/schemas/user";

@ObjectType()
class Project {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  price: number;

  @Field()
  user: User;
}

export { Project };
