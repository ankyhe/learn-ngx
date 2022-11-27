import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Post } from "../model/post.model";
import { postFeatureKey, PostState } from "./post.reducer";

const featureSelector = createFeatureSelector<PostState>(postFeatureKey);

export const getStatePosts = createSelector(
  featureSelector,
  (postState: PostState): Post[] => postState.posts
);