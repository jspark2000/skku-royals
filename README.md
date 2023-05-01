## Description

성균관대학교 미식축구부 부원관리 플랫폼입니다. 현재 개발중입니다<br>

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# watch mode 1 (staff_page & server)
$ pnpm dev:staff

# watch mode 2 (survey_page & server)
$ pnpm dev:survey

# seeding database (prisma)
$ pnpm --filter backend exec prisma migrate reset
```

## License

This project is [MIT licensed](LICENSE).
