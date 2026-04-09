import { ImageResponse } from 'next/og';
import { getPost } from '@/lib/blog-data';

export const alt = 'Aabracadabrrahh Blog Image';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = getPost(resolvedParams.slug);

  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 48,
            background: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Blog Post Not Found
        </div>
      ),
      {
        ...size,
      }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '80px',
          background: 'linear-gradient(135deg, #18113B 0%, #301755 100%)', // Magic purple
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ fontSize: '100px', marginRight: '30px' }}>{post.emoji}</div>
          <div
            style={{
              fontSize: '32px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              color: '#FF1493', // Hot pink
              backgroundColor: 'rgba(255, 20, 147, 0.15)',
              padding: '10px 30px',
              borderRadius: '100px',
              border: '4px solid #FF1493',
            }}
          >
            {post.category}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
            marginTop: '40px',
          }}
        >
          <div
            style={{
              fontSize: '76px',
              fontWeight: '900',
              lineHeight: '1.1',
              textTransform: 'uppercase',
              maxWidth: '950px',
              color: '#FFD700', // Star gold
              textShadow: '5px 5px 0px #FF1493', // Hot pink shadow
            }}
          >
            {post.title}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            borderTop: '4px solid rgba(255,255,255,0.2)',
            paddingTop: '40px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                fontSize: '48px',
                fontWeight: '900',
                color: 'white',
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}
            >
              Aabracadabrrahh!
            </div>
          </div>
          <div
            style={{
              fontSize: '32px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              color: '#00D4FF', // Sky cyan
            }}
          >
            The Magic Blog 📖
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
