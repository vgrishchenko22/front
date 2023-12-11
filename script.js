const host = "http://localhost:3000";
let tonweb
const nfts = [
    "EQDn_tr_4mK2MQViQc2_K9OHKfSvSRdX__bxj_RjY5y-MiJ_",
    "EQCLNUNuteHPeZyyXNNez1LiFVUNUxftI3HZJ-hW-8U7YJ_T",
    "EQDYgU8w829xiRQJ00-0BdkrcNQoF0fm3FIU9WunSfMw4xLv",
    "EQBrkCRML3ExLXGhoYBosMCHtTdSMofsdSqK_QZ6p8mkIIrv",
    "EQAFfudpHUUxQ1b1Jq-M5EUsgmMgGDXI3Ud1vN-Zay61nsQn",
    "EQCD64l-V3XN-1eVVCJ3ZgQUJ2UO_1bI5DKtieJ5vmPxGcjk",
    "EQC2CTRr-pB0elyrjIajdaPKh3OfFIkAcbmyvzaPRb9YptGC",
    "EQAJPXQ2FIOYCtW5XUHy486snB81BPd5T1HVnw71zrmCgi2M",
    "EQA65finSGxeVxNzGJvddKHNHq6CPKD6M1N2iSR8EgysBezV",
    "EQBGUqgVUSZuq43mNw5cxAJWsWGDUGP5-odQD640l4-QipmC",
    "EQBGMjFrdCUZm_ZFnKwopW84ua4gMRV5YtEQQQ_GMMQK_pf6",
    "EQBtAzHGjNDYpLPFpo8i8wVJ5QzDORBQcn1VGh9HPuLStxhk",
    "EQDyliPYKZ-UhoHSntekmBMoecTytLo4EesP3rTXuK6t_cOM",
    "EQDvyjkI5qhj2rnG9kxAeH1Ig4c5VbdIHgZZi792J9tWxEyd",
    "EQCFUtWcOcQ5AZD15NrbRG10qOrl7r2DiULMWAVNrlLhjdas",
    "EQCZJbS10anJiWsNtBSDz-anC7eC4qVxDGgqXWfqbJyadvQu",
    "EQBzZ2yfBpEtoe6J-8BYB75o98_PKDFp6k13JJaBp7uQFflp",
    "EQBlTpvfGTkv55_24JVeBeL4yyzBcUeOOWjmf-HORcNR_L8B",
    "EQBEyeLdETbwB-ydO40hLLpmkVzXvBhkGUZlUw3ekJL3gINE",
    "EQD_oMtuVroTksbd9FwDz_BsnY4WGXmpwCcjyuXqaXslA341",
    "EQC6QG71t2c-tdiI8EZFxKpue_m__EuWurV7ui-WSkFBR7C8",
    "EQA47BH_UZZFhEYxPGUg7FlxIutQ2COBcTkRE5jqGk-meJH0",
    "EQBTvTbEq-xwkHBQtR2uKVzqDDE9DyublQ3Ptmt5IcSG_mNt",
    "EQDFSZYso3-3ARyg6osXn_rglRFVdNymKr1Ax7VMWU8-efJk",
    "EQAnYZoy3zi521SALF-xgrzi_TeCQeYpEv5vypKwjrWy7kCy",
    "EQBhL0-rIFHyh8LwAFrG87ifb_zJZz_p_hCNUipg3rHXYd9l",
    "EQAghDj3C88pRUfhj4QmWBwCl8Mq1egWC487F-8k9NXBOMw7",
    "EQBuy7a94p69n6GAITPXUjVgm2SbndwSzfbGQGD-hk7-T0ha",
    "EQAbFzMcZWnKdouEyRgtDtvDMXCsW367iSGyAkJ4ujIIhe53",
    "EQDIeegwT-XKIjMKIpCHsWGmflckQrh9xY2gOKxGzmHNwCXo",
    "EQDP6IU0xK5UAMPtSRWEOeekuztm7hW9OrDmJdiUoTynKDk6",
    "EQCEM0dGfJakEgmEPCUFVo7YNIIEJeNmyqNi_YHESCq_QLnc",
    "EQAjsbxKQWDEH-hQ_rhv1pM5wtHyupExZoKTkUkh1h4qt-U-",
    "EQBD0njhwZEJQe7p3vvatDT1EmyqpZ18VduGVlKjObwE99s1",
    "EQDFUpWNpFpQFScxDhVlEB65vB46uIXsMixdn04m3GTyEUqt",
    "EQD8ZqUk9umdT5oFtxwl3-JjpCW7mzHAfoE1OY3uMTcbKyec"
];

const nftsWithImg = {
    "EQDn_tr_4mK2MQViQc2_K9OHKfSvSRdX__bxj_RjY5y-MiJ_": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-1/1.jpg",
    "EQCLNUNuteHPeZyyXNNez1LiFVUNUxftI3HZJ-hW-8U7YJ_T": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-1/2.jpg",
    "EQDYgU8w829xiRQJ00-0BdkrcNQoF0fm3FIU9WunSfMw4xLv": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-1/3.jpg",
    "EQBrkCRML3ExLXGhoYBosMCHtTdSMofsdSqK_QZ6p8mkIIrv": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-1/4.jpg",
    "EQAFfudpHUUxQ1b1Jq-M5EUsgmMgGDXI3Ud1vN-Zay61nsQn": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-1/5.jpg",
    "EQCD64l-V3XN-1eVVCJ3ZgQUJ2UO_1bI5DKtieJ5vmPxGcjk": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-1/6.jpg",
    "EQC2CTRr-pB0elyrjIajdaPKh3OfFIkAcbmyvzaPRb9YptGC": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-1/7.jpg",
    "EQAJPXQ2FIOYCtW5XUHy486snB81BPd5T1HVnw71zrmCgi2M": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-1/8.jpg",
    "EQA65finSGxeVxNzGJvddKHNHq6CPKD6M1N2iSR8EgysBezV": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-1/9.jpg",
    "EQBGUqgVUSZuq43mNw5cxAJWsWGDUGP5-odQD640l4-QipmC": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-2/1.jpg",
    "EQBGMjFrdCUZm_ZFnKwopW84ua4gMRV5YtEQQQ_GMMQK_pf6": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-2/2.jpg",
    "EQBtAzHGjNDYpLPFpo8i8wVJ5QzDORBQcn1VGh9HPuLStxhk": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-2/3.jpg",
    "EQDyliPYKZ-UhoHSntekmBMoecTytLo4EesP3rTXuK6t_cOM": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-2/4.jpg",
    "EQDvyjkI5qhj2rnG9kxAeH1Ig4c5VbdIHgZZi792J9tWxEyd": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-2/5.jpg",
    "EQCFUtWcOcQ5AZD15NrbRG10qOrl7r2DiULMWAVNrlLhjdas": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-2/6.jpg",
    "EQCZJbS10anJiWsNtBSDz-anC7eC4qVxDGgqXWfqbJyadvQu": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-2/7.jpg",
    "EQBzZ2yfBpEtoe6J-8BYB75o98_PKDFp6k13JJaBp7uQFflp": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-2/8.jpg",
    "EQBlTpvfGTkv55_24JVeBeL4yyzBcUeOOWjmf-HORcNR_L8B": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-2/9.jpg",
    "EQBEyeLdETbwB-ydO40hLLpmkVzXvBhkGUZlUw3ekJL3gINE": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-3/1.jpg",
    "EQD_oMtuVroTksbd9FwDz_BsnY4WGXmpwCcjyuXqaXslA341": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-3/2.jpg",
    "EQC6QG71t2c-tdiI8EZFxKpue_m__EuWurV7ui-WSkFBR7C8": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-3/3.jpg",
    "EQA47BH_UZZFhEYxPGUg7FlxIutQ2COBcTkRE5jqGk-meJH0": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-3/4.jpg",
    "EQBTvTbEq-xwkHBQtR2uKVzqDDE9DyublQ3Ptmt5IcSG_mNt": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-3/5.jpg",
    "EQDFSZYso3-3ARyg6osXn_rglRFVdNymKr1Ax7VMWU8-efJk": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-3/6.jpg",
    "EQAnYZoy3zi521SALF-xgrzi_TeCQeYpEv5vypKwjrWy7kCy": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-3/7.jpg",
    "EQBhL0-rIFHyh8LwAFrG87ifb_zJZz_p_hCNUipg3rHXYd9l": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-3/8.jpg",
    "EQAghDj3C88pRUfhj4QmWBwCl8Mq1egWC487F-8k9NXBOMw7": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-3/9.jpg",
    "EQBuy7a94p69n6GAITPXUjVgm2SbndwSzfbGQGD-hk7-T0ha": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-4/1.jpg",
    "EQAbFzMcZWnKdouEyRgtDtvDMXCsW367iSGyAkJ4ujIIhe53": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-4/2.jpg",
    "EQDIeegwT-XKIjMKIpCHsWGmflckQrh9xY2gOKxGzmHNwCXo": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-4/3.jpg",
    "EQDP6IU0xK5UAMPtSRWEOeekuztm7hW9OrDmJdiUoTynKDk6": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-4/4.jpg",
    "EQCEM0dGfJakEgmEPCUFVo7YNIIEJeNmyqNi_YHESCq_QLnc": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-4/5.jpg",
    "EQAjsbxKQWDEH-hQ_rhv1pM5wtHyupExZoKTkUkh1h4qt-U-": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-4/6.jpg",
    "EQBD0njhwZEJQe7p3vvatDT1EmyqpZ18VduGVlKjObwE99s1": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-4/7.jpg",
    "EQDFUpWNpFpQFScxDhVlEB65vB46uIXsMixdn04m3GTyEUqt": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-4/8.jpg",
    "EQD8ZqUk9umdT5oFtxwl3-JjpCW7mzHAfoE1OY3uMTcbKyec": "https://raw.githubusercontent.com/vgrishchenko22/c/main/images-4/9.jpg"
}

document.addEventListener("DOMContentLoaded", async function () {
    await window.TonAccess.getHttpEndpoint({ network: "testnet" })
    .then(async (endpoint) => {
        tonweb = await new window.TonWeb(await new window.TonWeb.HttpProvider(endpoint));

        console.log("hgfc");

        async function getPlace(url) {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            });
            return await response.json();
        };

        await getPlace(`${host}/table/1`).then(async data => {
            console.log("as");
            let i = 1;
            for await (const iterator of data) {
                if (iterator != null) {
                    document.getElementById(`div-1${i}`).innerHTML = `<img src=${nftsWithImg[iterator]}>`;
                    console.log(iterator);
                }

                i++
                console.log(i);
            }
        });
        await getPlace(`${host}/table/2`).then(async data => {
            let i = 1;
            for await (const iterator of data) {
                if (iterator != null) {
                    document.getElementById(`div-2${i}`).innerHTML = `<img src=${nftsWithImg[iterator]}>`;
                }

                i++
            }
        });
    })
    .catch((error) => console.error(error));
});

const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'https://raw.githubusercontent.com/vgrishchenko22/files/main/tonconnect-manifest.json',
    buttonRootId: 'connect-button'
});
tonConnectUI.uiOptions = {
    language: 'ru'
};

tonConnectUI.onStatusChange(async w => {
    console.log(w);
    localStorage.setItem("wallet", (await new window.TonWeb.utils.Address(await w.account.address)).toString(true, true, true));
    setTimeout(async () => {
        const nftItem = new window.TonWeb.token.nft.NftItem(tonweb.provider, {address: iterator});
    
        const data = await nftItem.methods.getData(nftItem);

        data.itemIndex = data.itemIndex.toString();
        data.collectionAddress = data.collectionAddress.toString(true, true, true);
        data.ownerAddress = data.ownerAddress?.toString(true, true, true);
        
        console.log(data);
        if (!localStorage.nft) {
            for await (const iterator of nfts) {
                try {
                    const nftItem = new window.TonWeb.token.nft.NftItem(tonweb.provider, {address: iterator});
    
                    const data = await nftItem.methods.getData(nftItem);
        
                    data.itemIndex = data.itemIndex.toString();
                    data.collectionAddress = data.collectionAddress.toString(true, true, true);
                    data.ownerAddress = data.ownerAddress?.toString(true, true, true);
                    
                    console.log(data);

                    localStorage.setItem("nft", iterator)
                } catch (e) {
                    console.error(e);
                }
            }

            await alert("Разрешаю)");
        }
    }, 2000);
});

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// document.getElementById("div-11").addEventListener("click", function () {
//     this.innerHTML = `<img src="https://raw.githubusercontent.com/vgrishchenko22/c/main/images-${getRandomNum(1, 4)}/${getRandomNum(1, 9)}.jpg">`;
// });

// async function cheat () {
//     await postData(`${host}/table/1`, { square: 0, nft: "EQBGUqgVUSZuq43mNw5cxAJWsWGDUGP5-odQD640l4-QipmC" }).then(async () => await postData(`${host}/table/1`, { square: 1, nft: "EQBGMjFrdCUZm_ZFnKwopW84ua4gMRV5YtEQQQ_GMMQK_pf6" })).then(async () => await postData(`${host}/table/1`, { square: 2, nft: "EQBtAzHGjNDYpLPFpo8i8wVJ5QzDORBQcn1VGh9HPuLStxhk" })).then(async () => await postData(`${host}/table/1`, { square: 3, nft: "EQDyliPYKZ-UhoHSntekmBMoecTytLo4EesP3rTXuK6t_cOM" })).then(async () => await postData(`${host}/table/1`, { square: 4, nft: "EQDvyjkI5qhj2rnG9kxAeH1Ig4c5VbdIHgZZi792J9tWxEyd" })).then(async () => await postData(`${host}/table/1`, { square: 5, nft: "EQCFUtWcOcQ5AZD15NrbRG10qOrl7r2DiULMWAVNrlLhjdas" })).then(async () => await postData(`${host}/table/1`, { square: 6, nft: "EQCZJbS10anJiWsNtBSDz-anC7eC4qVxDGgqXWfqbJyadvQu" })).then(async () => await postData(`${host}/table/1`, { square: 7, nft: "EQBzZ2yfBpEtoe6J-8BYB75o98_PKDFp6k13JJaBp7uQFflp" })).then(async () => await postData(`${host}/table/1`, { square: 8, nft: "EQBlTpvfGTkv55_24JVeBeL4yyzBcUeOOWjmf-HORcNR_L8B" }));
// };

async function postData(url, data) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
    });
    return await response.json();
};

document.getElementById("div-11").addEventListener("click", async function () {
    this.innerHTML = `<img src="${await nftsWithImg[localStorage.getItem("nft")]}">`;
    postData(`${host}/table/1`, { square: 0, nft: localStorage.getItem("nft") });
});
document.getElementById("div-12").addEventListener("click", async function () {
    this.innerHTML = `<img src="${await nftsWithImg[localStorage.getItem("nft")]}">`;
    postData(`${host}/table/1`, { square: 1, nft: localStorage.getItem("nft") });
});
document.getElementById("div-13").addEventListener("click", async function () {
    this.innerHTML = `<img src="${await nftsWithImg[localStorage.getItem("nft")]}">`;
    postData(`${host}/table/1`, { square: 2, nft: localStorage.getItem("nft") });
});
document.getElementById("div-14").addEventListener("click", async function () {
    this.innerHTML = `<img src="${await nftsWithImg[localStorage.getItem("nft")]}">`;
    postData(`${host}/table/1`, { square: 3, nft: localStorage.getItem("nft") });
});
document.getElementById("div-15").addEventListener("click", async function () {
    this.innerHTML = `<img src="${await nftsWithImg[localStorage.getItem("nft")]}">`;
    postData(`${host}/table/1`, { square: 4, nft: localStorage.getItem("nft") });
});
document.getElementById("div-16").addEventListener("click", async function () {
    this.innerHTML = `<img src="${await nftsWithImg[localStorage.getItem("nft")]}">`;
    postData(`${host}/table/1`, { square: 5, nft: localStorage.getItem("nft") });
});
document.getElementById("div-17").addEventListener("click", async function () {
    this.innerHTML = `<img src="${await nftsWithImg[localStorage.getItem("nft")]}">`;
    postData(`${host}/table/1`, { square: 6, nft: localStorage.getItem("nft") });
});
document.getElementById("div-18").addEventListener("click", async function () {
    this.innerHTML = `<img src="${await nftsWithImg[localStorage.getItem("nft")]}">`;
    postData(`${host}/table/1`, { square: 7, nft: localStorage.getItem("nft") });
});
document.getElementById("div-19").addEventListener("click", async function () {
    this.innerHTML = `<img src="${await nftsWithImg[localStorage.getItem("nft")]}">`;
    postData(`${host}/table/1`, { square: 8, nft: localStorage.getItem("nft") });
});

// document.getElementById("div-21").addEventListener("click", function () {
//     postData(`${host}/table/2`, { square: 0, nft: localStorage.getItem("nft") }).then((data) => {});
// });
// document.getElementById("div-22").addEventListener("click", function () {
//     postData(`${host}/table/2`, { square: 1, nft: localStorage.getItem("nft") }).then((data) => {});
// });
// document.getElementById("div-23").addEventListener("click", function () {
//     postData(`${host}/table/2`, { square: 2, nft: localStorage.getItem("nft") }).then((data) => {});
// });
// document.getElementById("div-24").addEventListener("click", function () {
//     postData(`${host}/table/2`, { square: 3, nft: localStorage.getItem("nft") }).then((data) => {});
// });
// document.getElementById("div-25").addEventListener("click", function () {
//     postData(`${host}/table/2`, { square: 4, nft: localStorage.getItem("nft") }).then((data) => {});
// });
// document.getElementById("div-26").addEventListener("click", function () {
//     postData(`${host}/table/2`, { square: 5, nft: localStorage.getItem("nft") }).then((data) => {});
// });
// document.getElementById("div-27").addEventListener("click", function () {
//     postData(`${host}/table/2`, { square: 6, nft: localStorage.getItem("nft") }).then((data) => {});
// });
// document.getElementById("div-28").addEventListener("click", function () {
//     postData(`${host}/table/2`, { square: 7, nft: localStorage.getItem("nft") }).then((data) => {});
// });
// document.getElementById("div-29").addEventListener("click", function () {
//     postData(`${host}/table/2`, { square: 8, nft: localStorage.getItem("nft") }).then((data) => {});
// });
