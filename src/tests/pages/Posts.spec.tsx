import { render, screen } from '@testing-library/react';
import { mocked } from 'jest-mock';

import Posts, { getStaticProps } from '../../pages/posts';
import { getPrismicClient } from '../../services/prismic';

const posts = [
  {
    slug: 'my-new-post',
    title: 'My new post',
    excerpt: 'Post excerpt',
    updatedAt: '10 de dezembro de 2022'
  },
]

jest.mock('../../services/prismic');

describe('Post page', () => {
  it('renders correctly', () => {
    render(<Posts  posts={posts} />)
    
    expect(screen.getByText('My new post')).toBeInTheDocument();
  })

  it('loads intial data', async () => {
    const getPrismicClientMocked = mocked(getPrismicClient);

    getPrismicClientMocked.mockReturnValueOnce({
      getAllByType: jest.fn().mockResolvedValueOnce(
        [
          {
            uid: 'fake-slug',
            data: {
              title: [
                { type: 'heading1', text: 'Fake title 1'}
            ],
              content: [
                { type: 'paragraph', text: 'Fake excerpt 1'}
              ]
            },
            last_publication_date: '12-15-2022'
          }
        ]
      )
    } as any)

    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: [
            {
              slug: 'fake-slug',
              title: 'Fake title 1',
              excerpt: 'Fake excerpt 1',
              updatedAt: '15 de dezembro de 2022'
            }
          ]
        }
      })
    )
  })
})