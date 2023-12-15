function createChatHTML(item) {
    let html = '';
    switch(item.type) {
        case 'UI':
            html = `<div class="chat_ui"><div class="toast_comm"><span>${item.message}</span></div></div>`;
            break;
        case 'MESSAGE_MINE':
            html = `<div class="chat_comm chat_mine chat_start" tabindex="0"
                        style="position: static; top: 0px; left: 16px; padding-right: 22px;">
                        <div class="chat_contents">
                            <div class="bubble_comm bubble_talk">
                                <span class="ico_webchat ico_bubble">
                                    <svg aria-hidden="true" focusable="false">
                                        <use href="#icoBubble"></use>
                                    </svg>
                                </span>
                                <div class="bubble_body">
                                    <div class="contents_comm">
                                        <p><span>${item.message}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="util_bubble">
                            <div class="info_bubble">
                                <div class="list_info"><span class="screen_out">보낸시간</span>
                                    <span role="text">오후 <span class="num_comm">${item.time}</span></span>
                                </div>
                            </div>
                        </div>
                    </div>`;
            break;
        case 'MESSAGE':
            html = `<div class="chat_comm chat_another" tabindex="0"
                        style="position: static; top: 0px; left: 16px; padding-right: 22px;">
                        <div class="chat_profile">
                            <div class="profile_comm">
                                <div class="box_thumb" style="opacity: 1;">
                                    <svg viewBox="0 0 36 36" aria-hidden="true" focusable="false">
                                        <g>
                                            <image clip-path="url(#clipThumb2)" height="100%" width="100%"
                                                href="${item.profile}" preserveAspectRatio="xMidYMid slice"></image>
                                            <use href="#shapeSuircle2" class="thumb_bg"></use>
                                            <use href="#squircleBorder" class="thumb_stroke"></use>
                                        </g>
                                    </svg>
                                </div>
                                <div class="info_profile"><strong class="tit_profile">${item.name}</strong></div>
                            </div>
                        </div>
                        <div class="chat_contents">
                            <div class="bubble_comm bubble_talk">
                                <span class="ico_webchat ico_bubble">
                                    <svg aria-hidden="true" focusable="false">
                                        <use href="#icoBubble"></use>
                                    </svg>
                                </span>
                                <div class="bubble_body">
                                    <div class="contents_comm">
                                        ${item.message.split('\n').map(line => `<p><span>${line}</span></p>`).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="util_bubble">
                            <div class="info_bubble">
                                <div class="list_info"><span class="screen_out">보낸시간</span>
                                    <span role="text">오후 <span class="num_comm">${item.time}</span></span>
                                </div>
                            </div>
                        </div>
                    </div>`;
            break;
    }
    return html;
}

function toBinary(string) {
    const codeUnits = new Uint16Array(string.length);
    for (let i = 0; i < codeUnits.length; i++) {
        codeUnits[i] = string.charCodeAt(i);
    }
    return btoa(String.fromCharCode(...new Uint8Array(codeUnits.buffer))).replaceAll('=', '');
}

function fromBinary(encoded) {
    const binary = atob(encoded);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < bytes.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return String.fromCharCode(...new Uint16Array(bytes.buffer));
}

function urlParam(name) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (!urlParams.has(name)) { return false; } 
    return urlParams.get(name);
}

function renderChat() {
    const titleContainer = document.querySelector('.tit_webchat');
    const chatContainer = document.querySelector('.inner_webchat');

    const chatData = urlParam("data");
    const decodeChatData = {
        "room": "Github@LiF-Lee",
        "data": [
            {
                "type": "UI",
                "message": "2023년 12월 14일 목요일"
            },
            {
                "type": "UI",
                "message": "생각하는 라이언님이 들어왔습니다."
            },
            {
                "type": "MESSAGE_MINE",
                "time": "오후 4:25",
                "message": "이것은 로그"
            },
            {
                "type": "MESSAGE_MINE",
                "time": "오후 4:25",
                "message": "이것은 로그 22"
            },
            {
                "type": "UI",
                "message": "생각하는 라이언님이 나갔습니다."
            },
            {
                "type": "MESSAGE",
                "time": "오후 4:25",
                "name": "카카오톡 로그",
                "profile": "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
                "message": "아아 테스트 1\n아아 테스트 123\n아아 테스트 12345\n아아 테스트 1234567\n아아 테스트 123456789"
            }
        ]
    };

    if (chatData !== false) {
        const decodeChatData = JSON.parse(fromBinary(chatData));
        titleContainer.innerHTML = decodeChatData.room ?? "";
        if (decodeChatData.data !== undefined) {
            decodeChatData.data.forEach(item => {
                chatContainer.innerHTML += createChatHTML(item);
            });
        }
    }            
}

renderChat();