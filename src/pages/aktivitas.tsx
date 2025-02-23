import Album from '@/components/Album'
import YouTubes from '@/sections/YouTubes'

export default function AktivitasHome() {
  return (
    <div style={{ width: '100%' }}>
      <Album
        type="withNumbers"
        images={[
          { url: '/dummy-wallpaper.jpg', alt: 'dummy' },
          { url: '/dummy-wallpaper.jpg', alt: 'dummy' },
          { url: '/dummy-wallpaper.jpg', alt: 'dummy' },
          { url: '/dummy-wallpaper.jpg', alt: 'dummy' },
        ]}
      />
      <YouTubes
        title="Yayasan Flores Penuh Kasih on Youtube"
        youtubeVids={[
          {
            videoUrl: 'https://example.com',
            thumbnailUrl: '/dummy-wallpaper.jpg',
            title: 'Kunjungan ke Loccal Collection',
          },
          {
            videoUrl: 'https://example.com',
            thumbnailUrl: '/dummy-wallpaper.jpg',
            title: 'Kunjungan ke Loccal Collection',
          },
          {
            videoUrl: 'https://example.com',
            thumbnailUrl: '/dummy-wallpaper.jpg',
            title: 'Kunjungan ke Loccal Collection',
          },
          {
            videoUrl: 'https://example.com',
            thumbnailUrl: '/dummy-wallpaper.jpg',
            title: 'Kunjungan ke Loccal Collection',
          },
        ]}
      />
    </div>
  )
}
