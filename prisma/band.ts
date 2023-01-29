import axios from 'axios';

type BandPostResponse = {
  result_code: string;
  result_data: {
    paging: {
      next_params: {
        after: string;
        limit: string;
        band_key: string;
        access_token: string;
      };
    };
    items: BandPostItem[];
  };
};

type BandPostItem = {
  content: string;
  author: {
    name: string;
    description: string;
    role: string;
    profile_image_url: string;
    user_key: string;
  };
  post_key: string;
  comment_count: number;
  created_at: number;
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

async function getBandInfo(
  target: string,
  after?: string,
): Promise<BandPostResponse> {
  const result: BandPostResponse = await axios({
    method: 'get',
    url: 'https://openapi.band.us/v2/band/posts',
    params: {
      access_token: process.env.BAND_ACCESS_TOKEN,
      band_key:
        target === 'review'
          ? process.env.GAME_REVIEW_BAND_KEY
          : process.env.ROYALS_BAND_KEY,
      locale: 'ko_KR',
      after,
    },
  }).then((result) => {
    return result.data;
  });

  return result;
}

export async function getBandUserSeed() {
  const bandUsers: {
    userKey: string;
    profileUrl: string;
    userNickname: string;
  }[] = [];

  let after = undefined;

  for (let i = 0; i < 30; i++) {
    const result: BandPostResponse = await getBandInfo('main', after);
    const users = result.result_data.items.map((item) => {
      return {
        userKey: item.author.user_key,
        profileUrl:
          item.author.profile_image_url === ''
            ? 'https://ssl.pstatic.net/cmstatic/webclient/dres/20230116112132/images/template/profile_60x60.png'
            : item.author.profile_image_url,
        userNickname: item.author.name,
      };
    });
    bandUsers.push(...users);
    after = result.result_data.paging.next_params.after;
  }

  after = undefined;

  for (let i = 0; i < 30; i++) {
    const result: BandPostResponse = await getBandInfo('review', after);
    const users = result.result_data.items.map((item) => {
      return {
        userKey: item.author.user_key,
        profileUrl:
          item.author.profile_image_url === ''
            ? 'https://ssl.pstatic.net/cmstatic/webclient/dres/20230116112132/images/template/profile_60x60.png'
            : item.author.profile_image_url,
        userNickname: item.author.name,
      };
    });
    bandUsers.push(...users);
    after = result.result_data.paging.next_params.after;
  }

  const uniqueBandUsers: Map<
    string,
    {
      userKey: string;
      profileUrl: string;
      userNickname: string;
    }
  > = new Map();
  bandUsers.forEach((item) => {
    uniqueBandUsers.set(JSON.stringify(item.userKey), item);
  });

  const bandUserSeedData = new Array(...uniqueBandUsers.values());

  return bandUserSeedData;
}

export async function getReviews() {
  const bandPosts: {
    userKey: string;
    postKey: string;
    submissionTime: Date;
  }[] = [];

  let after = undefined;

  for (let i = 0; i < 30; i++) {
    const result: BandPostResponse = await getBandInfo('review', after);
    const posts = result.result_data.items.map((item) => {
      return {
        userKey: item.author.user_key,
        postKey: item.post_key,
        submissionTime: new Date(item.created_at),
      };
    });
    bandPosts.push(...posts);
    after = result.result_data.paging.next_params.after;
  }

  return bandPosts;
}
