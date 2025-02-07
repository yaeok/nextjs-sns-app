import { Article } from '@/domain/entities/article';

export const articles: Article[] = [
  Article.create({
    id: '1',
    title: 'Article 1',
    content:
      'Content 1Content 1Content 1Content 1Content 1Content 1Content 1Content 1Content 1Content 1Content 1Content 1Content 1Content 1Content 1Content 1Content 1Content 1Content 1Content 1Content 1Content 1Content 1',
    username: 'User 1',
    image: 'https://picsum.photos/id/237/200/300',
    favoritesCount: 1,
    createdAt: new Date('2020-01-01'),
    updatedAt: new Date('2020-01-01'),
  }),

  Article.create({
    id: '2',
    title: 'Article 2',
    content: 'Content 2',
    username: 'User 2',
    image: 'https://picsum.photos/id/237/200/300',
    favoritesCount: 2,
    createdAt: new Date('2020-01-02'),
    updatedAt: new Date('2020-01-02'),
  }),

  Article.create({
    id: '3',
    title: 'Article 3',
    content: 'Content 3',
    username: 'User 3',
    image: 'https://picsum.photos/id/237/200/300',
    favoritesCount: 3,
    createdAt: new Date('2020-01-03'),
    updatedAt: new Date('2020-01-03'),
  }),

  Article.create({
    id: '4',
    title: 'Article 4',
    content: 'Content 4',
    username: 'User 4',
    image: 'https://picsum.photos/id/237/200/300',
    favoritesCount: 4,
    createdAt: new Date('2020-01-04'),
    updatedAt: new Date('2020-01-04'),
  }),

  Article.create({
    id: '5',
    title: 'Article 5',
    content: 'Content 5',
    username: 'User 5',
    image: 'https://picsum.photos/id/237/200/300',
    favoritesCount: 5,
    createdAt: new Date('2020-01-05'),
    updatedAt: new Date('2020-01-05'),
  }),

  Article.create({
    id: '6',
    title: 'Article 6',
    content: 'Content 6',
    username: 'User 6',
    image: 'https://picsum.photos/id/237/200/300',
    favoritesCount: 6,
    createdAt: new Date('2020-01-06'),
    updatedAt: new Date('2020-01-06'),
  }),

  Article.create({
    id: '7',
    title: 'Article 7',
    content: 'Content 7',
    username: 'User 7',
    image: 'https://picsum.photos/id/237/200/300',
    favoritesCount: 7,
    createdAt: new Date('2020-01-07'),
    updatedAt: new Date('2020-01-07'),
  }),

  Article.create({
    id: '8',
    title: 'Article 8',
    content: 'Content 8',
    username: 'User 8',
    image: 'https://picsum.photos/id/237/200/300',
    favoritesCount: 8,
    createdAt: new Date('2020-01-08'),
    updatedAt: new Date('2020-01-08'),
  }),
]
