import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  youtubeVideoList: string
}

const YOUTUBE_API_URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${process.env.youTubePlaylistId}&key=${process.env.youTubeApiKey}`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  let youTubeData = ''

  try {
    await fetch(YOUTUBE_API_URL)
      .then((data) => data.json())
      .then((data) => {
        youTubeData = data.items
      })
  } catch (e) {
    throw Error('YouTube API error')
  }

  res.status(200).json({ youtubeVideoList: youTubeData })
}
