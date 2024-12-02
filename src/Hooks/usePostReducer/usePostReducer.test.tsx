import { Post } from "../../Types/Post";
import { postsReducer } from "./usePostReducer";

const stories = [
  {
    "title": "Top 10 Productivity Hacks for Remote Workers",
    "author": "James Nguyen",
    "content": "Working remotely offers flexibility, but it also requires discipline. Here are ten tips to maximize your efficiency and maintain a healthy work-life balance.",
    "date": "2024-11-27"
  },
  {
    "title": "Exploring the Cosmos: The Wonders of Space",
    "author": "Ava Carter",
    "content": "Space exploration has always fascinated humanity. From the first moon landing to the latest Mars rovers, the cosmos continues to inspire awe and wonder.",
    "date": "2024-11-28"
  },
  {
    "title": "10 Must-Read Self-Help Books for 2024",
    "author": "Emily Davis",
    "content": "Self-help books can provide valuable insights and motivation. Here’s a list of the best ones to read this year to improve your mindset and skills.",
    "date": "2024-11-24"
  },
];

const storiesByTitle = [
  {
    "title": "10 Must-Read Self-Help Books for 2024",
    "author": "Emily Davis",
    "content": "Self-help books can provide valuable insights and motivation. Here’s a list of the best ones to read this year to improve your mindset and skills.",
    "date": "2024-11-24"
  },
  {
    "title": "Exploring the Cosmos: The Wonders of Space",
    "author": "Ava Carter",
    "content": "Space exploration has always fascinated humanity. From the first moon landing to the latest Mars rovers, the cosmos continues to inspire awe and wonder.",
    "date": "2024-11-28"
  },
  {
    "title": "Top 10 Productivity Hacks for Remote Workers",
    "author": "James Nguyen",
    "content": "Working remotely offers flexibility, but it also requires discipline. Here are ten tips to maximize your efficiency and maintain a healthy work-life balance.",
    "date": "2024-11-27"
  },
];

const storiesByAuthor = [
  {
    "title": "Exploring the Cosmos: The Wonders of Space",
    "author": "Ava Carter",
    "content": "Space exploration has always fascinated humanity. From the first moon landing to the latest Mars rovers, the cosmos continues to inspire awe and wonder.",
    "date": "2024-11-28"
  },
  {
    "title": "10 Must-Read Self-Help Books for 2024",
    "author": "Emily Davis",
    "content": "Self-help books can provide valuable insights and motivation. Here’s a list of the best ones to read this year to improve your mindset and skills.",
    "date": "2024-11-24"
  },
  {
    "title": "Top 10 Productivity Hacks for Remote Workers",
    "author": "James Nguyen",
    "content": "Working remotely offers flexibility, but it also requires discipline. Here are ten tips to maximize your efficiency and maintain a healthy work-life balance.",
    "date": "2024-11-27"
  },
];

const storiesByDate = [
  {
    "title": "Exploring the Cosmos: The Wonders of Space",
    "author": "Ava Carter",
    "content": "Space exploration has always fascinated humanity. From the first moon landing to the latest Mars rovers, the cosmos continues to inspire awe and wonder.",
    "date": "2024-11-28"
  },
  {
    "title": "Top 10 Productivity Hacks for Remote Workers",
    "author": "James Nguyen",
    "content": "Working remotely offers flexibility, but it also requires discipline. Here are ten tips to maximize your efficiency and maintain a healthy work-life balance.",
    "date": "2024-11-27"
  },
  {
    "title": "10 Must-Read Self-Help Books for 2024",
    "author": "Emily Davis",
    "content": "Self-help books can provide valuable insights and motivation. Here’s a list of the best ones to read this year to improve your mindset and skills.",
    "date": "2024-11-24"
  },
];

describe('postsReducer', () => {
  it("Sorts the stories alphabetically", () => {
    const action = { type: "sort_items_by_title", items: [] };
    const state = { items: stories.map(x => Post.fromJSON(x)), loading: false, error: null };
    const newState = postsReducer(state, action);
    const expectedState = { items: storiesByTitle.map(x => Post.fromJSON(x)), loading: false, error: null };
    expect(newState).toStrictEqual(expectedState);
  });
  it("Sorts the stories alphabetically in reverse order", () => {
    const action = { type: "sort_items_by_title_reverse", items: [] };
    const state = { items: stories.map(x => Post.fromJSON(x)), loading: false, error: null };
    const newState = postsReducer(state, action);
    const expectedState = { items: storiesByTitle.map(x => Post.fromJSON(x)).reverse(), loading: false, error: null };
    expect(newState).toStrictEqual(expectedState);
  });
  it("Sorts the stories by author", () => {
    const action = { type: "sort_items_by_author", items: [] };
    const state = { items: stories.map(x => Post.fromJSON(x)), loading: false, error: null };
    const newState = postsReducer(state, action);
    const expectedState = { items: storiesByAuthor.map(x => Post.fromJSON(x)), loading: false, error: null };
    expect(newState).toStrictEqual(expectedState);
  });
  it("Sorts the stories by author in reverse order", () => {
    const action = { type: "sort_items_by_author_reverse", items: [] };
    const state = { items: stories.map(x => Post.fromJSON(x)), loading: false, error: null };
    const newState = postsReducer(state, action);
    const expectedState = { items: storiesByAuthor.map(x => Post.fromJSON(x)).reverse(), loading: false, error: null };
    expect(newState).toStrictEqual(expectedState);
  });
  it("Sorts the stories by date", () => {
    const action = { type: "sort_items_by_date", items: [] };
    const state = { items: stories.map(x => Post.fromJSON(x)), loading: false, error: null };
    const newState = postsReducer(state, action);
    const expectedState = { items: storiesByDate.map(x => Post.fromJSON(x)), loading: false, error: null };
    expect(newState).toStrictEqual(expectedState);
  });
  it("Sorts the stories by date in reverse order", () => {
    const action = { type: "sort_items_by_date_reverse", items: [] };
    const state = { items: stories.map(x => Post.fromJSON(x)), loading: false, error: null };
    const newState = postsReducer(state, action);
    const expectedState = { items: storiesByDate.map(x => Post.fromJSON(x)).reverse(), loading: false, error: null };
    expect(newState).toStrictEqual(expectedState);
  });
})