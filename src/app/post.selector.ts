import { createSelector } from "@ngrx/store";
import { Post } from "./post.model";
import { State } from "./reducers";

export const getStatePosts = createSelector(
    (allState: any) => {
      console.log('selector state is ', allState);
      return allState['rootState'];
    },
    (state: State): Post[] => state.posts
  );