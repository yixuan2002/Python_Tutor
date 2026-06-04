/* The six lesson views. Pulls helpers + widgets off window. */
const { K, S, N, F, C, B, O, CodeBlock, CodeOut, Callout, Code, QuizQuestion, SnakeGame } = window;

/* ---------- 0 · OVERVIEW ---------- */
function SecOverview() {
  const goals = [
    '說出什麼是程式語言，以及 Python 的特色與應用',
    '說出什麼是變數，並用 = 指定值',
    '分辨四種基本資料型別：整數、浮點數、字串、布林值',
    '使用 print() 搭配 f-string 輸出文字',
    '看懂最終貪吃蛇成品，感受六週後能做到的事',
  ];
  const tl = [
    ['0–8 min', '🌍', '課程開場', '什麼是程式語言？為什麼學 Python？'],
    ['8–20 min', '📖', '概念講解', '變數、資料型別、print（精簡版）'],
    ['20–32 min', '💡', '例題示範', '一個例題，師生一起逐行分析'],
    ['32–40 min', '📝', '小考（3 題）', '選擇題，立即對答案'],
    ['40–45 min', '🎮', '成品展示', '展示六週後的貪吃蛇遊戲成品'],
  ];
  return (
    <div className="anim-in">
      <div className="section-eyebrow">🐍 試教版 · 45 分鐘</div>
      <h1 className="section-title">認識 <span className="accent">Python</span></h1>
      <p className="section-lead">第一次見面的一堂課。我們會聊聊程式是什麼、寫下你的第一個變數，最後看看六週後你能親手做出來的遊戲。</p>

      <div className="metacards">
        <div className="metacard"><div className="mk">適合年齡</div><div className="mv">11–17 歲</div></div>
        <div className="metacard"><div className="mk">上課時間</div><div className="mv">45 分鐘</div></div>
        <div className="metacard"><div className="mk">上課方式</div><div className="mv">線上遠距</div></div>
        <div className="metacard"><div className="mk">課程性質</div><div className="mv">試教版</div></div>
      </div>

      <div className="block">
        <h3>📋 本次試教學習目標</h3>
        <p>學完這堂課，學生能夠：</p>
        <div className="goals">
          {goals.map((g, i) => (
            <div className="goal" key={i}><span className="gk">✓</span><span className="gt">{g}</span></div>
          ))}
        </div>
      </div>

      <div className="block">
        <h3>⏱ 課程節奏</h3>
        <div className="timeline">
          {tl.map((r, i) => (
            <div className="tl-row" key={i}>
              <span className="tl-time">{r[0]}</span>
              <span className="tl-ic">{r[1]}</span>
              <span className="tl-name">{r[2]}<span>{r[3]}</span></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- 1 · 課程開場 ---------- */
function SecOpening() {
  const why = [
    ['1', '讀起來像英文', '語法簡潔清楚，比其他語言少很多複雜的符號，初學者容易上手。'],
    ['2', '用途超廣', '從遊戲、網站、AI、資料分析到太空探測，Python 幾乎無所不在。'],
    ['3', '社群龐大', '全世界有超過 800 萬人在用 Python，遇到問題很容易找到答案。'],
  ];
  const apps = [
    ['🎬', 'YouTube、Netflix', '推薦你喜歡的影片的演算法', false],
    ['🎮', 'Minecraft 教育版、EVE Online', '遊戲邏輯、伺服器後端', false],
    ['🤖', 'ChatGPT、Siri、翻譯軟體', '機器學習模型的訓練與運行', false],
    ['🔬', 'NASA 太空任務、病毒研究', '資料分析、模擬計算', false],
    ['📱', 'Instagram、Spotify 後端', '處理使用者資料、推薦系統', false],
    ['🐍', '我們的貪吃蛇遊戲', '你六週後自己寫出來的遊戲！', true],
  ];
  return (
    <div className="anim-in">
      <div className="section-eyebrow">🌍 第零部分 · 0–8 分鐘</div>
      <h1 className="section-title">課程<span className="accent">開場</span></h1>
      <p className="section-lead">什麼是程式語言？為什麼全世界都在學 Python？</p>

      <div className="block">
        <h3>0-1　什麼是程式語言？</h3>
        <p>電腦非常聰明，但它只聽得懂一種語言：<strong>0 和 1 組成的機器碼</strong>。程式語言就是「人和電腦之間的翻譯官」—— 我們用接近人類語言的方式寫指令，電腦再把它翻譯成自己看得懂的格式。</p>
        <div className="compare">
          <div className="compare-card bad">
            <div className="cc-tag">沒有程式語言（機器碼）</div>
            <div className="cc-code">01110000 01110010 01101001 …</div>
            <div className="cc-note">電腦看得懂，人看不懂 😵</div>
          </div>
          <div className="compare-card good">
            <div className="cc-tag">有程式語言（Python）</div>
            <div className="cc-code">print("Hello!")</div>
            <div className="cc-note">人看得懂，電腦也能執行 ✅</div>
          </div>
        </div>
        <Callout kind="teacher" title="老師互動提示">
          <p>問學生：「你覺得電腦怎麼知道按下 A 鍵要顯示字母 A？」</p>
          <p>讓學生自由回答 30 秒，再說明：「這背後都是程式在運作。」重點不是答對，而是讓學生開始思考「電腦是怎麼運作的」。</p>
        </Callout>
      </div>

      <div className="block">
        <h3>0-2　為什麼學 Python？</h3>
        <p>世界上有幾百種程式語言，Python 是其中最適合入門的一種，原因有三個：</p>
        <table className="dtable">
          <thead><tr><th style={{ width: '40px' }}>#</th><th style={{ width: '160px' }}>特色</th><th>說明</th></tr></thead>
          <tbody>
            {why.map((r, i) => (
              <tr key={i}><td><strong>{r[0]}</strong></td><td><strong style={{ color: 'var(--ink)' }}>{r[1]}</strong></td><td>{r[2]}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="block">
        <h3>0-3　Python 在生活中的應用</h3>
        <p>你每天都在接觸 Python 寫出來的東西，只是你不知道而已：</p>
        <div className="applist">
          {apps.map((a, i) => (
            <div className={'appcard' + (a[3] ? ' spotlight' : '')} key={i}>
              <span className="ai">{a[0]}</span>
              <div><div className="at">{a[1]}</div><div className="ad">{a[2]}</div></div>
            </div>
          ))}
        </div>
      </div>

      <Callout kind="tip" icon="🔗" title="結尾銜接語（切換到概念講解）">
        <p>「好，現在你知道 Python 是什麼、能做什麼了。接下來我們開始學 Python 最基礎的東西：<strong>變數</strong>。」</p>
        <p>「你想想看，如果要讓電腦記住你的名字，要怎麼告訴它？」</p>
      </Callout>
    </div>
  );
}

/* ---------- 2 · 概念講解 ---------- */
function SecConcept() {
  const types = [
    ['整數', 'int', '12, -5, 0', '沒有小數點的數字'],
    ['浮點數', 'float', '3.14, -0.5', '有小數點的數字'],
    ['字串', 'str', '"你好", "Python"', '文字，要加引號'],
    ['布林值', 'bool', 'True, False', '只有真或假兩種'],
  ];
  return (
    <div className="anim-in">
      <div className="section-eyebrow">📖 第一部分 · 8–20 分鐘</div>
      <h1 className="section-title">概念<span className="accent">講解</span></h1>
      <p className="section-lead">三個一定要會的基礎：變數、資料型別、還有 print()。</p>

      <div className="block">
        <h3>1-1　變數</h3>
        <p>變數就像是一個有名字的「盒子」，用 <Code>=</Code> 把值放進去：</p>
        <CodeBlock file="variables.py">
{`name      `}<O>=</O>{` `}<S>"小明"</S>{`   `}<C># 字串：文字，要加引號</C>{`
age       `}<O>=</O>{` `}<N>12</N>{`       `}<C># 整數：沒有小數點</C>{`
score     `}<O>=</O>{` `}<N>99.5</N>{`     `}<C># 浮點數：有小數點</C>{`
is_winner `}<O>=</O>{` `}<B>True</B>{`     `}<C># 布林值：只有 True 或 False</C>
        </CodeBlock>
        <Callout kind="warn" icon="📛" title="命名規則（快速版）">
          <p>只能用英文、數字、底線（<Code>_</Code>）；不能有空格；不能以數字開頭。</p>
          <p>大小寫有差：<Code>Name</Code> 和 <Code>name</Code> 是不同的變數。</p>
        </Callout>
      </div>

      <div className="block">
        <h3>1-2　四種資料型別</h3>
        <table className="dtable">
          <thead><tr><th>型別</th><th>英文名稱</th><th>範例</th><th>說明</th></tr></thead>
          <tbody>
            {types.map((r, i) => (
              <tr key={i}>
                <td><strong style={{ color: 'var(--ink)' }}>{r[0]}</strong></td>
                <td><span className="type-pill">{r[1]}</span></td>
                <td><code>{r[2]}</code></td>
                <td>{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="block">
        <h3>1-3　print() 與 f-string</h3>
        <p><Code>print()</Code> 是 Python 內建函式，把東西顯示在螢幕上。搭配 <strong>f-string</strong> 可以把變數直接嵌入文字：</p>
        <CodeBlock file="print_demo.py">
{`name `}<O>=</O>{` `}<S>"小明"</S>{`
age  `}<O>=</O>{` `}<N>12</N>{`
`}<F>print</F>{`(`}<S>"Hello, Python!"</S>{`)`}{`         `}<C># 輸出純文字</C>{`
`}<F>print</F>{`(`}<S>{`f"我叫 {name}，今年 {age} 歲"`}</S>{`)  `}<C># f-string：變數自動代入</C>{`
`}<F>print</F>{`(`}<S>{`f"明年我 {age + 1} 歲"`}</S>{`)   `}<C># {} 裡可以直接做運算</C>
        </CodeBlock>
        <CodeOut>{`Hello, Python!
我叫 小明，今年 12 歲
明年我 13 歲`}</CodeOut>
        <Callout kind="warn" title="input() 的型別陷阱（快速提醒）">
          <p><Code>name = input('你叫什麼？')</Code> → 回傳的一定是<strong>字串（str）</strong>。</p>
          <p>要做數學運算，需先轉換：<Code>age = int(input('幾歲？'))</Code></p>
        </Callout>
      </div>
    </div>
  );
}

/* ---------- 3 · 例題示範 ---------- */
function SecExample() {
  return (
    <div className="anim-in">
      <div className="section-eyebrow">💡 第二部分 · 20–32 分鐘</div>
      <h1 className="section-title">例題<span className="accent">示範</span></h1>
      <p className="section-lead">把剛剛學的全部組合起來，寫一支會自我介紹的程式。</p>

      <Callout kind="teacher" title="老師講解方式">
        <p>逐行讀程式碼，每一行都問學生「你覺得這行在做什麼？」，<strong>不要直接說答案</strong>。</p>
      </Callout>

      <div className="block" style={{ marginTop: 'var(--sp-6)' }}>
        <h3>例題：自我介紹程式</h3>
        <CodeBlock file="self_intro.py">
<C># 例題：自我介紹</C>{`
`}<C># （# 是注解，電腦會忽略，是給人看的說明）</C>{`
name  `}<O>=</O>{` `}<F>input</F>{`(`}<S>"你叫什麼名字？ "</S>{`)
age   `}<O>=</O>{` `}<F>int</F>{`(`}<F>input</F>{`(`}<S>"你幾歲？ "</S>{`))   `}<C># input 回傳字串，int() 轉成整數</C>{`
grade `}<O>=</O>{` `}<F>input</F>{`(`}<S>"你幾年級？ "</S>{`)
`}<F>print</F>{`(`}<S>"───────────────────"</S>{`)
`}<F>print</F>{`(`}<S>{`f"大家好！我叫 {name}。"`}</S>{`)
`}<F>print</F>{`(`}<S>{`f"我今年 {age} 歲，就讀 {grade} 年級。"`}</S>{`)
`}<F>print</F>{`(`}<S>{`f"再過一年我就 {age + 1} 歲了！"`}</S>{`)
`}<F>print</F>{`(`}<S>"───────────────────"</S>{`)`}
        </CodeBlock>
        <CodeOut label="執行結果範例">{`你叫什麼名字？ 小明
你幾歲？ 12
你幾年級？ 六年級
───────────────────
大家好！我叫 小明。
我今年 12 歲，就讀 六年級。
再過一年我就 13 歲了！
───────────────────`}</CodeOut>
      </div>

      <div className="block">
        <h3>🤔 討論提問（選 1–2 題問學生）</h3>
        <div className="goals">
          <div className="goal"><span className="gk" style={{ background: 'var(--monta-orange)', boxShadow: '0 2px 0 var(--monta-orange-deep)' }}>Q</span><span className="gt">第 4 行的 <Code>int()</Code> 拿掉會怎樣？試試看！</span></div>
          <div className="goal"><span className="gk" style={{ background: 'var(--monta-orange)', boxShadow: '0 2px 0 var(--monta-orange-deep)' }}>Q</span><span className="gt">f-string 裡的 <Code>{'{age + 1}'}</Code> 是什麼意思？Python 會先算嗎？</span></div>
          <div className="goal"><span className="gk" style={{ background: 'var(--monta-orange)', boxShadow: '0 2px 0 var(--monta-orange-deep)' }}>Q</span><span className="gt"><Code>#</Code> 是什麼？把它後面的字拿掉，程式還能跑嗎？</span></div>
        </div>
      </div>
    </div>
  );
}

/* ---------- 4 · 小考 ---------- */
function SecQuiz() {
  return (
    <div className="anim-in">
      <div className="section-eyebrow">📝 第三部分 · 32–40 分鐘</div>
      <h1 className="section-title">小<span className="accent">考</span></h1>
      <p className="section-lead">三題選擇題，點選看看你學會了沒 —— 點完馬上知道答案。</p>

      <div className="quiz-grid">
        <QuizQuestion
          no={1}
          question="下列哪一個是合法的 Python 變數名稱？"
          options={['2score', 'my score', 'my_score', 'my-score']}
          answer={2}
          explain="變數不能以數字開頭、不能有空格、不能用減號；底線是允許的。"
        />
        <QuizQuestion
          no={2}
          question={'age = input("幾歲？") 執行後，age 的型別是？'}
          options={['int', 'float', 'str', 'bool']}
          answer={2}
          explain="input() 一律回傳字串（str），要做運算得先用 int() 轉換。"
        />
      </div>
      <QuizQuestion
        no={3}
        question={'print(f"我叫 {name}") 中，f 的作用是？'}
        options={['讓字串變大寫', '讓 {} 裡的變數被代入', '印出字母 f', '限定只能輸入英文']}
        answer={1}
        explain="f-string 讓你把變數直接放進 {} 裡，輸出時自動代入它的值。"
      />
    </div>
  );
}

/* ---------- 5 · 成品展示 ---------- */
function SecFinal() {
  const rows = [
    ["player_name = '小明'", '遊戲畫面顯示玩家名稱'],
    ["print(f'得分：{score}')", '即時分數顯示在畫面上'],
    ['if score > high_score（下週）', '自動偵測新高分並提示'],
    ['while is_running（第三週）', '遊戲主迴圈一直跑'],
    ['snake.append(new_head)（第五週）', '蛇吃到食物後身體變長'],
  ];
  return (
    <div className="anim-in">
      <div className="section-eyebrow">🎮 第四部分 · 40–45 分鐘</div>
      <h1 className="section-title">成品<span className="accent">展示</span></h1>
      <p className="section-lead">最後五分鐘 —— 這就是六週後你能親手寫出來的東西：一隻真正可以玩的貪吃蛇。</p>

      <div className="block">
        <SnakeGame />
      </div>

      <Callout kind="teacher" title="老師操作說明">
        <p>讓學生實際玩幾秒鐘。重點不是讓學生看懂程式碼，而是讓他們看到：「這就是我六週後能做出來的東西！」</p>
      </Callout>

      <div className="block" style={{ marginTop: 'var(--sp-6)' }}>
        <h3>今天學的 → 六週後能做到的</h3>
        <table className="dtable">
          <thead><tr><th>今天學的（45 分鐘後）</th><th>六週後能做到的</th></tr></thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}><td><code>{r[0]}</code></td><td>{r[1]}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <Callout kind="tip" icon="🌟" title="結尾說明詞">
        <p>「今天你學的每一個概念 —— 變數、print、f-string —— 都在這個遊戲裡用到了。」</p>
        <p>「六週後，這個遊戲是你自己一行一行寫出來的，不是複製貼上，是真的寫出來的。」</p>
        <p>「下週我們繼續：學完條件判斷，貪吃蛇就能知道自己有沒有撞到牆壁！」</p>
      </Callout>
    </div>
  );
}

window.SECTIONS = [
  { id: 'overview', comp: SecOverview },
  { id: 'opening', comp: SecOpening },
  { id: 'concept', comp: SecConcept },
  { id: 'example', comp: SecExample },
  { id: 'quiz', comp: SecQuiz },
  { id: 'final', comp: SecFinal },
];
