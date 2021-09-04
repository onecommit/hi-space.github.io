---
title: "Certbot"
tags: web env
---

HTTP 를 HTTPS로 사용하기 위해 Certbot을 통해 인증받는다.

<!--more-->

## Mac

```bash
certbot certonly --manual --preferred-challenges dns --server https://acme-v02.api.letsencrypt.org/directory --manual-public-ip-logging-ok -d '*.hispace.kr' -d hispace.kr
```

`_acme-challenge.hispace.kr` 로 DNS TXT 추가

```bash
nslookup -q=txt _acme-challenge.hispace.kr
```

```bash
root@yooui-MacBookPro ~ # certbot certonly --manual --preferred-challenges dns --server https://acme-v02.api.letsencrypt.org/directory --manual-public-ip-logging-ok -d '*.hispace.kr' -d hispace.kr
Use of --manual-public-ip-logging-ok is deprecated.
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator manual, Installer None
Requesting a certificate for *.hispace.kr and hispace.kr
Performing the following challenges:
dns-01 challenge for hispace.kr

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please deploy a DNS TXT record under the name
_acme-challenge.hispace.kr with the following value:

GxYmPau0F9u3m2bYBCSxjuGsNdmha6sMThskCicyMZU

Before continuing, verify the record is deployed.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Press Enter to Continue
Waiting for verification...
Cleaning up challenges
Use of --manual-public-ip-logging-ok is deprecated.
Subscribe to the EFF mailing list (email: hello12.space@gmail.com).
We were unable to subscribe you the EFF mailing list because your e-mail address appears to be invalid. You can try again later by visiting https://act.eff.org.

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/hispace.kr/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/hispace.kr/privkey.pem
   Your certificate will expire on 2021-04-29. To obtain a new or
   tweaked version of this certificate in the future, simply run
   certbot again. To non-interactively renew *all* of your
   certificates, run "certbot renew"
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
```
