<br/><br/>
<p align="center">
  <a href="https://docs.skku-royals.football"><img src="https://github.com/jspark2000/skku-royals/assets/102132161/ff34bf1e-bc04-4c0d-b1e1-0119d24944b3" / width=600></a>
</p>
<p align="center"> An Integrated people management platform for SKKU American Football Team <strong>ROYALS</strong></p> 

<br/>

## Description

현재 개발중입니다 <br/>

## Documentation
https://docs.skku-royals.football <br/>

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
