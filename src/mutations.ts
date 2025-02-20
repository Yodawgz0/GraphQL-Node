import { reviews } from "./_db.ts";
import { ReviewInput } from "./type.ts";

export const mutations = {
  addReview: (review: ReviewInput) => {
    const newReview = {
      id: (reviews.length + 1).toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ...review,
    };
    reviews.push(newReview);
    return newReview;
  },
};
