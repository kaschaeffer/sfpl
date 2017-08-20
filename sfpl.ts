import * as Config from "./config";
import Nightmare = require("nightmare");

const SFPLLogin = "https://sfpl.bibliocommons.com/user/login";

var done = (err: any) => {
  if (err) {
    console.log(err);
  }
};

function login(barcode: string, password: string) {
  // this successfully logs into SFPL
  new Nightmare()
    .goto(SFPLLogin)
    .type('input[name="name"]', barcode)
    .type('input[name="user_pin"]', password)
    .click('input[name="commit"]')
    .wait('div[testid="user_dashboard_page_heading"]')
    .screenshot('/Users/kschaeffer/Development/personal/typescript/sfpl/welcome.png')
    .end()
    .run(done);
}

login(Config.barcode, Config.password);
