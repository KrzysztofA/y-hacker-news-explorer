type PostJSON = {
  title?: string;
  author?: string;
  content?: string;
  date?: string;
  objectID?: string;
  url?: string;
};

class Post {
  title: string;
  author: string;
  content: string;
  date: Date;
  url: string;
  objectID: string;

  constructor(
    title: string = "",
    author: string = "",
    content: string = "",
    date: string = "",
    objectID: string = "",
    url: string = ""
  ) {
    this.title = title;
    this.author = author;
    this.content = content;
    this.date = new Date(date);
    this.url = url;
    this.objectID = objectID;
  }

  public static fromJSON(json: PostJSON): Post {
    return new Post(json.title, json.author, json.content, json.date, json.objectID, json.url);
  }

  getTitle(): string {
    return this.title;
  }

  getAuthor(): string {
    return this.author;
  }

  getContent(): string {
    return this.content;
  }

  getURL(): string {
    return this.url;
  }

  getObjectID(): string {
    return this.objectID;
  }

  getDate(): string {
    return this.date.toDateString();
  }

  getFormattedDate(): string {
    return `${this.date.getDay()}/${this.date.getMonth()}/${this.date.getFullYear()}`;
  }

  getRawDate(): Date {
    return this.date;
  }

  search(str: string): boolean {
    if (str == undefined || str == null) return true;
    return (
      this.content.toLowerCase().includes(str?.toLowerCase()) ||
      this.title?.toLowerCase().includes(str?.toLowerCase()) ||
      this.author.toLowerCase().includes(str.toLowerCase()) ||
      this.getDate().includes(str)
    );
  }

  compare(y: Post): number {
    return -this.date.getTime() + y.date.getTime();
  }

  compareTitle(y: Post): number {
    return ("" + this.title).localeCompare(y.title);
  }

  compareAuthor(y: Post): number {
    return ("" + this.author).localeCompare(y.author);
  }

  toJSON(): PostJSON {
    return { title: this.title, author: this.author, content: this.content, date: this.getDate() };
  }
}

export { Post };
export type { PostJSON };
