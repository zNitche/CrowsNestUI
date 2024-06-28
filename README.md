# CrowsNestUI
Web UI for [CrowsNest](https://github.com/zNitche/CrowsNest). 


### Technologies
- React 18.2
- Vite 5.2.0
- Typescript 5.2.2

### Features
- Fetching services data from `CrowsNest`
- Data (service tiles) searching
- Integrated with eslint and prettier

### Setup
#### Dev
1. Create `.env` file
```
cp .env.template .env
```
2. Set `VITE_API_URL` to API url, for example
```
http://192.168.1.100
```
3. Set `VITE_API_PREFIX`:
```
/api
```
4. Install dependencies
```
npm i
```
5. Start dev server
```
npm run dev
```
#### Production
1. Create `.env` file
```
cp .env.template .env
```
2. Set `VITE_API_PREFIX`:
```
/api
```
3. Build project
```
npm run build
```
4. Prepare output files for rpi pico upload
```
python3 prepare_build.py
```
5. Copy content of `dist` directory to `<CROWSNEST_ROOT_DIR>/files`
