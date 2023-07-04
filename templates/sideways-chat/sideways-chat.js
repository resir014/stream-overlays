/* eslint-disable dot-notation */
/* eslint-disable no-invalid-this */
/* eslint-disable no-negated-condition */
/*
 * Widget created by Shiromu Kara, (c) 2023.
 * https://shiromu.carrd.co/
 */

/* eslint-disable complexity */
let totalMessages = 0;
let messagesLimit = 0;
let noname = 'show';
let ignored_nickColor = 'user';
let ignored_removeSelector,
  ignored_addition,
  ignored_customNickColor,
  channelName,
  provider,
  highlight,
  ignored_animate;
let animationIn = 'bounceIn';
let animationOut = 'bounceOut';
let hideAfter = 60;
let hideCommands = 'no';
let ignoredUsers = [];
let previousSender = '';
const ignored_emotes = [];

window.addEventListener('onEventReceived', async function handleEventReceived(obj) {
  if (obj.detail.event.listener === 'widget-button') {
    if (obj.detail.event.field === 'testMessage') {
      let emulated = new CustomEvent('onEventReceived', {
        detail: {
          listener: 'message',
          event: {
            service: 'twitch',
            data: {
              time: Date.now(),
              tags: {
                'badge-info': '',
                badges: 'moderator/1,partner/1',
                color: '#5B99FF',
                'display-name': 'StreamElements',
                emotes: '25:46-50',
                flags: '',
                id: '43285909-412c-4eee-b80d-89f72ba53142',
                mod: '1',
                'room-id': '85827806',
                subscriber: '0',
                'tmi-sent-ts': '1579444549265',
                turbo: '0',
                'user-id': '100135110',
                'user-type': 'mod',
              },
              nick: channelName,
              userId: '100135110',
              displayName: channelName,
              displayColor: '#5B99FF',
              badges: [
                {
                  type: 'moderator',
                  version: '1',
                  url: 'https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/3',
                  description: 'Moderator',
                },
                {
                  type: 'partner',
                  version: '1',
                  url: 'https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/3',
                  description: 'Verified',
                },
              ],
              channel: channelName,
              text: 'Howdy! My name is Bill and I am here to serve Kappa',
              isAction: !1,
              emotes: [
                {
                  type: 'twitch',
                  name: 'Kappa',
                  id: '25',
                  gif: !1,
                  urls: {
                    1: 'https://static-cdn.jtvnw.net/emoticons/v1/25/1.0',
                    2: 'https://static-cdn.jtvnw.net/emoticons/v1/25/1.0',
                    4: 'https://static-cdn.jtvnw.net/emoticons/v1/25/3.0',
                  },
                  start: 46,
                  end: 50,
                },
              ],
              msgId: '43285909-412c-4eee-b80d-89f72ba53142',
            },
            renderedText:
              'Howdy! My name is Bill and I am here to serve <img src="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0" srcset="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0 1x, https://static-cdn.jtvnw.net/emoticons/v1/25/1.0 2x, https://static-cdn.jtvnw.net/emoticons/v1/25/3.0 4x" title="Kappa" class="emote">',
          },
        },
      });
      window.dispatchEvent(emulated);
    }
    return;
  }
  if (obj.detail.listener === 'delete-message') {
    const msgId = obj.detail.event.msgId;
    $(`.message-row[data-msgid=${msgId}]`).remove();
    return;
  } else if (obj.detail.listener === 'delete-messages') {
    const sender = obj.detail.event.userId;
    $(`.message-row[data-sender=${sender}]`).remove();
    return;
  }

  // inline events:
  // new followers
  if (obj.detail.listener === 'follower-latest') {
    let event = obj['detail']['event'];
    let eventUsername = `<span class="user-text-username">${event['name']}</span>`;
    let eventColor = '#FFFFFF';
    let eventSound = new Audio('{{followEventSound}}');
    let subtext = 'New Follower';
    let text = `${eventUsername} is now following. Thank you!`;
    let type = 'follow';
    addAlert(text, subtext, eventColor, eventSound, type);
    return;
  }

  // new raids
  if (obj.detail.listener === 'raid-latest') {
    let event = obj['detail']['event'];
    let eventUsername = `<span class="user-text-username">${event['name']}</span>`;
    let eventAmount = event['amount'];
    let eventColor = '#D71176';
    let eventSound = new Audio('{{raidEventSound}}');
    let subtext = 'Raid';
    let text = `${eventUsername} raided with a party of ${eventAmount}!`;
    let type = 'raid';
    addAlert(text, subtext, eventColor, eventSound, type);
    return;
  }

  // new cheers
  if (obj.detail.listener === 'cheer-latest') {
    let event = obj['detail']['event'];
    let eventUsername = `<span class="user-text-username">${event['name']}</span>`;
    let eventAmount = event['amount'];
    let eventColor = '#9B45FF';
    let eventSound = new Audio('{{supportEventSound}}');
    let subtext = 'Bits';
    let text = `${eventUsername} just cheered ${eventAmount} bits!`;
    let type = 'cheer';
    addAlert(text, subtext, eventColor, eventSound, type);
    return;
  }

  // new tipping
  if (obj.detail.listener === 'tip-latest') {
    let event = obj['detail']['event'];
    // let userCurrency = event['userCurrency']['symbol'];
    let userCurrency = '$';
    let eventUsername = `<span class="user-text-username">${event['name']}</span>`;
    let eventAmount = userCurrency + event['amount'];
    let eventColor = '#00FFCD';
    let eventSound = new Audio('{{supportEventSound}}');
    let subtext = 'Donation';
    let text = `${eventUsername} donated ${eventAmount}!`;
    let type = 'donation';
    addAlert(text, subtext, eventColor, eventSound, type);
    return;
  }

  // new subs
  if (obj.detail.listener === 'subscriber-latest') {
    let event = obj['detail']['event'];
    let eventUsername = `<span class="user-text-username">${event['name']}</span>`;
    let eventColor = '#F49B0B';
    let eventSound = new Audio('{{supportEventSound}}');
    let type = 'sub';

    // lay out the groundwork for sub types
    // these should have been 'true' or 'false'
    let isCommunityGift = event['isCommunityGift'];
    let isGifted = event['gifted'];
    let subBomb = event['bulkGifted'];

    // classifications
    // don't display anything if it's "continued sub"
    if (isCommunityGift) {
      return;
    }

    // sub bombs
    if (subBomb) {
      let subtext = 'Gift Sub';
      let eventAmountCount = event['amount'] > 1 ? 'subs' : 'sub';
      let eventAmount = event['amount'] + eventAmountCount;
      let text = `${eventUsername} just gifted ${eventAmount} to the community!`;
      addAlert(text, subtext, eventColor, eventSound, type);

      // direct gifted sub
    } else if (isGifted) {
      let subtext = 'Gift Sub';
      eventUsername = event['name'];
      let text = `<span class="user-text-username">${event['sender']}</span> just gifted a sub to ${eventUsername}!`;
      addAlert(text, subtext, eventColor, eventSound, type);

      // resub
    } else if (event['amount'] > 1) {
      let subtext = event['tier'] == 'prime' ? 'Prime Resub' : 'Resub';
      // let subtext = 'Resub';
      let eventAmount = `${event['amount']} months`;
      let text = `${eventUsername} just resubbed for ${eventAmount}`;
      addAlert(text, subtext, eventColor, eventSound, type);

      // first sub
    } else if (event['amount'] == 1) {
      let subtext = event['tier'] == 'prime' ? 'Prime Subcriber' : 'Subscriber';
      let text = `${eventUsername} is now subscribed!`;
      addAlert(text, subtext, eventColor, eventSound, type);
    }
    return;
  }

  if (obj.detail.listener !== 'message') return;
  let data = obj.detail.event.data;
  if (data.text.startsWith('!') && hideCommands === 'yes') return;
  if (ignoredUsers.indexOf(data.nick) !== -1) return;
  let message = attachEmotes(data);
  let badges = '';
  let badge;
  if (provider === 'mixer') {
    data.badges.push({ url: data.avatar });
  }
  for (let i = 0; i < data.badges.length; i++) {
    badge = data.badges[i];
    badges += `<img alt="" src="${badge.url}" class="badge"> `;
  }
  // get pronouns
  let pronounList = await fetch('https://pronouns.alejo.io/api/pronouns').then(response =>
    response.json(),
  );
  let pronounUser = await fetch(
    `https://pronouns.alejo.io/api/users/${obj.detail.event.data.displayName.toLowerCase()}`,
  ).then(response => response.json());
  let pronounDisplay = '';
  console.log('before check');
  console.log(pronounDisplay);
  if (typeof pronounUser[0] !== 'undefined') {
    const pronouns = pronounList.find(pronoun => pronoun.name === pronounUser[0].pronoun_id);
    pronounDisplay = pronouns?.display;
  }
  console.log('after check');
  console.log(pronounDisplay);

  let username = data.displayName;
  let nickname = data.displayName;
  const color = data.displayColor !== '' ? data.displayColor : `#${md5(username).substr(26)}`;
  username = `<span class="pronoun">${pronounDisplay}</span><span style="color:${color}">${username}</span>`;

  highlight = obj.detail.event.data.tags['msg-id'] === 'highlighted-message';

  addMessage({
    nickname,
    username,
    badges,
    message,
    isAction: data.isAction,
    userId: data.userId,
    msgId: data.msgId,
  });
});

window.addEventListener('onWidgetLoad', function handleWidgetLoad(obj) {
  const fieldData = obj.detail.fieldData;
  animationIn = fieldData.animationIn;
  animationOut = fieldData.animationOut;
  hideAfter = fieldData.hideAfter;
  messagesLimit = fieldData.messagesLimit;
  ignored_nickColor = fieldData.nickColor;
  ignored_customNickColor = fieldData.customNickColor;
  hideCommands = fieldData.hideCommands;
  channelName = obj.detail.channel.username;
  ignored_animate = fieldData.messageAlign;
  noname = fieldData.noname;
  fetch(`https://api.streamelements.com/kappa/v2/channels/${obj.detail.channel.id}/`)
    .then(response => response.json())
    .then(profile => {
      provider = profile.provider;
    });
  ignoredUsers = fieldData.ignoredUsers.toLowerCase().replace(' ', '').split(',');
});

function attachEmotes(message) {
  let text = html_encode(message.text);
  let data = message.emotes;
  return text.replace(/([^\s]*)/gi, (m, key) => {
    let result = data.filter(emote => {
      return emote.name === key;
    });
    if (typeof result[0] !== 'undefined') {
      let url = result[0]['urls'][1];
      return `<img alt="" src="${url}" class="emote"/>`;
    } else return key;
  });
}

function html_encode(e) {
  return e.replace(/[<>"^]/g, htmlCode => {
    return `&#${htmlCode.charCodeAt(0)};`;
  });
}

function addMessage({
  nickname: _nickname,
  username,
  badges,
  message,
  isAction,
  uid,
  msgId,
  avatar: _avatar,
}) {
  if (noname === 'show') {
    if (previousSender !== username) {
      previousSender = username;
    } else {
      username = '';
      badges = '';
    }
  }

  totalMessages += 1;
  let actionClass = '';
  if (isAction) {
    actionClass = 'action';
  }
  const element = $.parseHTML(`
    <div data-sender="${uid}" data-msgid="${msgId}" class="message-row animated" id="msg-${totalMessages}">
        <div class="user-box ${actionClass}">${badges}${username}</div>
        <div class="user-message ${actionClass}">${message}</div>
    </div>`);

  if (hideAfter !== 999) {
    $('.main-container').prepend(element);
    if (highlight) {
      let highlightmsg = document.querySelector(`#msg-${totalMessages}`);
      highlightmsg.classList.add('highlight');
    }
    gsap.fromTo(
      `#msg-${totalMessages}`,
      0.5,
      { width: 0 },
      { ease: Power1.easeOut, width: 'auto' },
    );

    $('.main-container .message-row')
      .prepend(element)
      .delay(hideAfter * 1000)
      .queue(() => {
        $(this)
          .removeClass(animationIn)
          .addClass(animationOut)
          .delay(1000)
          .queue(() => {
            $(this).remove();
          })
          .dequeue();
      });
  } else {
    $('.main-container').prepend(element);
    if (highlight) {
      let highlightmsg = document.querySelector(`#msg-${totalMessages}`);
      highlightmsg.classList.add('highlight');
    }
    gsap.fromTo(
      `#msg-${totalMessages}`,
      0.5,
      { width: 0 },
      { ease: Power1.easeOut, width: 'auto' },
    );
  }

  document.querySelectorAll('.main-container .message-row').forEach((el, i) => {
    if (i >= { messagesLimit }) {
      gsap
        .timeline()
        .to(el, { opacity: 0 })
        .add(() => {
          el.remove();
        });
    }
  });
}

function addAlert(text, subtext, eventColor, eventSound, type) {
  totalMessages += 1;
  const element = $.parseHTML(`
    <div class="alert-row message-row animated ${type}" id="msg-${totalMessages}">
        <span class="user-alert" style="background-color: ${eventColor};">${subtext}</span>
        <span class="user-text" style="background-color: ${eventColor}40;">${text}</span>
    </div>`);

  if (hideAfter !== 999) {
    $('.main-container').prepend(element);
    gsap.fromTo(
      `#msg-${totalMessages}`,
      0.5,
      { width: 0 },
      { ease: Power1.easeOut, width: 'auto' },
    );

    $('.main-container .message-row')
      .prepend(element)
      .delay(hideAfter * 1000)
      .queue(() => {
        $(this)
          .removeClass(animationIn)
          .addClass(animationOut)
          .delay(1000)
          .queue(() => {
            $(this).remove();
          })
          .dequeue();
      });
  } else {
    $('.main-container').prepend(element);
    if (highlight) {
      let highlightmsg = document.querySelector(`#msg-${totalMessages}`);
      highlightmsg.classList.add('highlight');
    }
    gsap.fromTo(
      `#msg-${totalMessages}`,
      0.5,
      { width: 0 },
      { ease: Power1.easeOut, width: 'auto' },
    );
  }

  document.querySelectorAll('.main-container .message-row').forEach((el, i) => {
    if (i >= { messagesLimit }) {
      gsap
        .timeline()
        .to(el, { opacity: 0 })
        .add(() => {
          el.remove();
        });
    }
  });
  playEventSound(eventSound);
}

function playEventSound(sound) {
  sound.volume = '{eventVolume}';
  sound.play();
  if (sound.currentTime == sound.duration) {
    sound.pause();
    sound.currentTime = 0;
  }
}
