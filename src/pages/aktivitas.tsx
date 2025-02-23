import YouTubes from '@/sections/YouTubes'

export default function AktivitasHome() {
  return (
    <div style={{ width: '100%' }}>
      <h1>Aktivitas</h1>
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
