const VITE_TEST_VAR = import.meta.env.VITE_TEST_VAR;

let backoffGap = 0;


/** @type {import('./$types').RequestHandler} */
export async function GET(event) {
    console.log(await event.request.json());
    const data = await (await fetch('https://www.dnd5eapi.co/api/classes/bard')).json();
    const resp = new Response(JSON.stringify(data));
    return resp;
}

export async function POST(event) {
    await backoff();
    console.log('test var:', VITE_TEST_VAR); 
    const reqdata = await event.request.json();
    const dndresp = await fetch(`https://www.dnd5eapi.co/api/classes/${reqdata.index}`);

    if (!dndresp.ok) {
        return dndresp;
    }
    const data = await dndresp.json();
    const resp = new Response(JSON.stringify(data));
    return resp;
}

export async function PUT(event) {
    console.log(event);
    return new Response();
}

export async function DELETE(event) {
    console.log(event);
    return new Response();
}

async function backoff() {
    setTimeout(() => {
        backoffGap*backoffGap;
    }, backoffGap);
}

setInterval(() => {
    backoffGap < 0 ? backoffGap = 0 : backoffGap/backoffGap;
}, 500);

/*
{
  cookies: {
    get: [Function: get],
    getAll: [Function: getAll],
    set: [Function: set],
    delete: [Function: delete],
    serialize: [Function: serialize]
  },
  fetch: [Function (anonymous)],
  getClientAddress: [Function: getClientAddress],
  locals: {},
  params: {},
  platform: undefined,
  request: Request {
    method: 'GET',
    url: 'http://localhost:5174/api/dice',
    headers: Headers {
      host: 'localhost:5174',
      connection: 'keep-alive',
      'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'upgrade-insecure-requests': '1',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
      accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'sec-fetch-site': 'none',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-user': '?1',
      'sec-fetch-dest': 'document',
      'accept-encoding': 'gzip, deflate, br, zstd',
      'accept-language': 'en-US,en;q=0.9,ar;q=0.8'
    },
    destination: '',
    referrer: 'about:client',
    referrerPolicy: '',
    mode: 'cors',
    credentials: 'same-origin',
    cache: 'default',
    redirect: 'follow',
    integrity: '',
    keepalive: false,
    isReloadNavigation: false,
    isHistoryNavigation: false,
    signal: AbortSignal { aborted: false }
  },
  route: { id: '/api/dice' },
  setHeaders: [Function: setHeaders],
  url: URL {
    href: 'http://localhost:5174/api/dice',
    origin: 'http://localhost:5174',
    protocol: 'http:',
    username: '',
    password: '',
    host: 'localhost:5174',
    hostname: 'localhost',
    port: '5174',
    pathname: '/api/dice',
    search: '',
    searchParams: URLSearchParams {},
    hash: ''
  },
  isDataRequest: false,
  isSubRequest: false
}
*/
