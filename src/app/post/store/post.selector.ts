import { createSelector } from "@ngrx/store";
import { Post } from "../model/post.model";
import { State } from "./post.reducer";

export const getStatePosts = createSelector(
    (allState: any) => {
      console.log('selector state is ', allState);
      return allState['rootState'];
    },
    (state: State): Post[] => state.posts
  );