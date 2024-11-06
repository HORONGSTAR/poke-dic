import React, { useState, useCallback, useRef } from 'react'
import Template from './components/Template'
import List from './components/List'
import Insert from './components/Insert'
import { TbWorldSearch } from 'react-icons/tb'

import './App.css'

function App() {
   const [pokes, setPokes] = useState([{ id: 1, num: '0001', name: '이상해씨', types: ['풀', '독'], checked: false }])

   const nextId = useRef(2)

   const onInsert = useCallback(
      (keyword, nextNum) => {
         const pokeDates = [
            { num: '0001', name: '이상해씨', types: ['독', '풀'], evolution: true },
            { num: '0002', name: '이상해풀', types: ['독', '풀'], evolution: true },
            { num: '0003', name: '이상해꽃', types: ['독', '풀'], evolution: false },
            { num: '0004', name: '파이리', types: ['불꽃'], evolution: true },
            { num: '0005', name: '리자드', types: ['불꽃'], evolution: true },
            { num: '0006', name: '리자몽', types: ['비행', '불꽃'], evolution: false },
            { num: '0007', name: '꼬부기', types: ['물'], evolution: true },
            { num: '0008', name: '어니부기', types: ['물'], evolution: true },
            { num: '0009', name: '거북왕', types: ['물'], evolution: false },
            { num: '0010', name: '캐터피', types: ['벌레'], evolution: true },
            { num: '0011', name: '단데기', types: ['벌레'], evolution: true },
            { num: '0012', name: '버터플', types: ['비행', '벌레'], evolution: false },
            { num: '0013', name: '뿔충이', types: ['독', '벌레'], evolution: true },
            { num: '0014', name: '딱충이', types: ['독', '벌레'], evolution: true },
            { num: '0015', name: '독침붕', types: ['독', '벌레'], evolution: false },
            { num: '0016', name: '구구', types: ['비행', '노말'], evolution: true },
            { num: '0017', name: '피죤', types: ['비행', '노말'], evolution: true },
            { num: '0018', name: '피죤투', types: ['비행', '노말'], evolution: false },
            { num: '0019', name: '꼬렛', types: ['노말'], evolution: true },
            { num: '0020', name: '레트라', types: ['노말'], evolution: false },
            { num: '0021', name: '깨비참', types: ['비행', '노말'], evolution: true },
            { num: '0022', name: '깨비드릴조', types: ['비행', '노말'], evolution: false },
            { num: '0023', name: '아보', types: ['독'], evolution: true },
            { num: '0024', name: '아보크', types: ['독'], evolution: false },
            { num: '0025', name: '피카츄', types: ['전기'], evolution: true },
            { num: '0026', name: '라이츄', types: ['전기'], evolution: false },
            { num: '0027', name: '모래두지', types: ['땅'], evolution: true },
            { num: '0028', name: '고지', types: ['땅'], evolution: false },
            { num: '0029', name: '니드런♀', types: ['독'], evolution: true },
            { num: '0030', name: '니드리나', types: ['독'], evolution: true },
            { num: '0031', name: '니드퀸', types: ['땅', '독'], evolution: false },
            { num: '0032', name: '니드런♂', types: ['독'], evolution: true },
            { num: '0033', name: '니드리노', types: ['독'], evolution: true },
            { num: '0034', name: '니드킹', types: ['땅', '독'], evolution: false },
            { num: '0035', name: '삐삐', types: ['페어리'], evolution: true },
            { num: '0036', name: '픽시', types: ['페어리'], evolution: false },
            { num: '0037', name: '식스테일', types: ['불꽃'], evolution: true },
            { num: '0038', name: '나인테일', types: ['불꽃'], evolution: false },
            { num: '0039', name: '푸린', types: ['페어리', '노말'], evolution: true },
            { num: '0040', name: '푸크린', types: ['페어리', '노말'], evolution: false },
            { num: '0041', name: '주뱃', types: ['독', '비행'], evolution: true },
            { num: '0042', name: '골뱃', types: ['독', '비행'], evolution: false },
            { num: '0043', name: '뚜벅쵸', types: ['독', '풀'], evolution: true },
            { num: '0044', name: '냄새꼬', types: ['독', '풀'], evolution: true },
            { num: '0045', name: '라플레시아', types: ['독', '풀'], evolution: false },
            { num: '0046', name: '파라스', types: ['풀', '벌레'], evolution: true },
            { num: '0047', name: '파라섹트', types: ['풀', '벌레'], evolution: false },
            { num: '0048', name: '콘팡', types: ['독', '벌레'], evolution: true },
            { num: '0049', name: '도나리', types: ['독', '벌레'], evolution: false },
            { num: '0050', name: '디그다', types: ['땅'], evolution: true },
            { num: '0051', name: '닥트리오', types: ['땅'], evolution: false },
            { num: '0052', name: '나옹', types: ['', '노말'], evolution: true },
            { num: '0053', name: '페르시온', types: ['', '노말'], evolution: false },
            { num: '0054', name: '고라파덕', types: ['물'], evolution: true },
            { num: '0055', name: '골덕', types: ['물'], evolution: false },
            { num: '0056', name: '망키', types: ['', '격투'], evolution: true },
            { num: '0057', name: '성원숭', types: ['', '격투'], evolution: false },
            { num: '0058', name: '가디', types: ['', '불꽃'], evolution: true },
            { num: '0059', name: '윈디', types: ['', '불꽃'], evolution: false },
            { num: '0060', name: '발챙이', types: ['물'], evolution: true },
            { num: '0061', name: '슈륙챙이', types: ['물'], evolution: true },
            { num: '0062', name: '강챙이', types: ['물', '격투'], evolution: false },
            { num: '0063', name: '캐이시', types: ['에스퍼'], evolution: true },
            { num: '0064', name: '윤겔라', types: ['에스퍼'], evolution: true },
            { num: '0065', name: '후딘', types: ['에스퍼'], evolution: false },
            { num: '0066', name: '알통몬', types: ['', '격투'], evolution: true },
            { num: '0067', name: '근육몬', types: ['', '격투'], evolution: true },
            { num: '0068', name: '괴력몬', types: ['', '격투'], evolution: false },
            { num: '0069', name: '모다피', types: ['독', '풀'], evolution: true },
            { num: '0070', name: '우츠동', types: ['독', '풀'], evolution: true },
            { num: '0071', name: '우츠보트', types: ['독', '풀'], evolution: false },
            { num: '0072', name: '왕눈해', types: ['독', '물'], evolution: true },
            { num: '0073', name: '파리', types: ['독', '물'], evolution: false },
            { num: '0074', name: '꼬마돌', types: ['땅', '바위'], evolution: true },
            { num: '0075', name: '데구리', types: ['땅', '바위'], evolution: true },
            { num: '0076', name: '딱구리', types: ['땅', '바위'], evolution: false },
            { num: '0077', name: '포니타', types: ['불꽃'], evolution: true },
            { num: '0078', name: '날쌩마', types: ['불꽃'], evolution: false },
            { num: '0079', name: '야돈', types: ['물', '에스퍼'], evolution: true },
            { num: '0080', name: '야도란', types: ['물', '에스퍼'], evolution: false },
            { num: '0081', name: '코일', types: ['강철', '전기'], evolution: true },
            { num: '0082', name: '레어코일', types: ['강철', '전기'], evolution: false },
            { num: '0083', name: '파오리', types: ['비행', '노말'], evolution: false },
            { num: '0084', name: '두두', types: ['비행', '노말'], evolution: true },
            { num: '0085', name: '두트리오', types: ['비행', '노말'], evolution: false },
            { num: '0086', name: '쥬쥬', types: ['물'], evolution: true },
            { num: '0087', name: '쥬레곤', types: ['물', '얼음'], evolution: false },
            { num: '0088', name: '질퍽이', types: ['독'], evolution: true },
            { num: '0089', name: '질뻐기', types: ['독'], evolution: false },
            { num: '0090', name: '셀러', types: ['물'], evolution: true },
            { num: '0091', name: '파르셀', types: ['물', '얼음'], evolution: true },
            { num: '0092', name: '고오스', types: ['독', '고스트'], evolution: true },
            { num: '0093', name: '고우스트', types: ['독', '고스트'], evolution: false },
            { num: '0094', name: '팬텀', types: ['독', '고스트'], evolution: false },
            { num: '0095', name: '롱스톤', types: ['땅', '바위'], evolution: false },
            { num: '0096', name: '슬리프', types: ['에스퍼'], evolution: true },
            { num: '0097', name: '슬리퍼', types: ['에스퍼'], evolution: false },
            { num: '0098', name: '크랩', types: ['물'], evolution: true },
            { num: '0099', name: '킹크랩', types: ['물'], evolution: false },
            { num: '0100', name: '찌리리공', types: ['전기'], evolution: true },
            { num: '0101', name: '붐볼', types: ['전기'], evolution: false },
            { num: '0102', name: '아라리', types: ['풀', '에스퍼'], evolution: true },
            { num: '0103', name: '나시', types: ['풀', '에스퍼'], evolution: false },
            { num: '0104', name: '탕구리', types: ['땅'], evolution: true },
            { num: '0105', name: '텅구리', types: ['땅'], evolution: false },
            { num: '0106', name: '시라소몬', types: ['격투'], evolution: false },
            { num: '0107', name: '홍수몬', types: ['격투'], evolution: false },
            { num: '0108', name: '내루미', types: ['노말'], evolution: false },
            { num: '0109', name: '또가스', types: ['독'], evolution: true },
            { num: '0110', name: '또도가스', types: ['독'], evolution: false },
            { num: '0111', name: '뿔카노', types: ['땅', '바위'], evolution: true },
            { num: '0112', name: '코뿌리', types: ['땅', '바위'], evolution: false },
            { num: '0113', name: '럭키', types: ['노말'], evolution: false },
            { num: '0114', name: '덩쿠리', types: ['풀'], evolution: false },
            { num: '0115', name: '캥카', types: ['노말'], evolution: false },
            { num: '0116', name: '쏘드라', types: ['물'], evolution: true },
            { num: '0117', name: '시드라', types: ['물'], evolution: false },
            { num: '0118', name: '콘치', types: ['물'], evolution: true },
            { num: '0119', name: '왕콘치', types: ['물'], evolution: false },
            { num: '0120', name: '별가사리', types: ['물'], evolution: true },
            { num: '0121', name: '아쿠스타', types: ['물', '에스퍼'], evolution: false },
            { num: '0122', name: '마임맨', types: ['페어리', '에스퍼'], evolution: false },
            { num: '0123', name: '스라크', types: ['비행', '벌레'], evolution: false },
            { num: '0124', name: '루주라', types: ['에스퍼'], evolution: false },
            { num: '0125', name: '에레브', types: ['전기'], evolution: false },
            { num: '0126', name: '마그마', types: ['불꽃'], evolution: false },
            { num: '0127', name: '쁘사이저', types: ['벌레'], evolution: false },
            { num: '0128', name: '켄타로스', types: ['노말'], evolution: false },
            { num: '0129', name: '잉어킹', types: ['물'], evolution: true },
            { num: '0130', name: '갸라도스', types: ['물', '비행'], evolution: false },
            { num: '0131', name: '라프라스', types: ['물', '얼음'], evolution: false },
            { num: '0132', name: '메타몽', types: ['노말'], evolution: false },
            { num: '0133', name: '이브이', types: ['노말'], evolution: true },
            { num: '0134', name: '샤미드', types: ['물'], evolution: true },
            { num: '0135', name: '쥬피썬더', types: ['전기'], evolution: true },
            { num: '0136', name: '부스터', types: ['불꽃'], evolution: false },
            { num: '0137', name: '폴리곤', types: ['노말'], evolution: false },
            { num: '0138', name: '암나이트', types: ['물', '바위'], evolution: true },
            { num: '0139', name: '암스타', types: ['물', '바위'], evolution: false },
            { num: '0140', name: '투구', types: ['물', '바위'], evolution: true },
            { num: '0141', name: '투구푸스', types: ['물', '바위'], evolution: false },
            { num: '0142', name: '프테라', types: ['비행', '바위'], evolution: false },
            { num: '0143', name: '잠만보', types: ['노말'], evolution: false },
            { num: '0144', name: '프리져', types: ['비행', '얼음'], evolution: false },
            { num: '0145', name: '썬더', types: ['비행', '전기'], evolution: false },
            { num: '0146', name: '파이어', types: ['비행', '불꽃'], evolution: false },
            { num: '0147', name: '미뇽', types: ['드래곤'], evolution: true },
            { num: '0148', name: '신뇽', types: ['드래곤'], evolution: true },
            { num: '0149', name: '망나뇽', types: ['비행', '드래곤'], evolution: false },
            { num: '0150', name: '뮤츠', types: ['에스퍼'], evolution: false },
            { num: '0151', name: '뮤', types: ['에스퍼'], evolution: false },
         ]
         if (nextNum) {
            let index = 0
            for (let idx in pokeDates) {
               if (pokeDates[idx].name == keyword && pokeDates[idx].evolution) {
                  index = Number(idx) + 1
                  return pokeDates[index]
               }
            }
         } else {
            const find = pokeDates.filter((pokeDate) => pokeDate.name === keyword)
            if (find[0]) {
               const poke = {
                  ...find[0],
                  id: nextId.current,
                  checked: false,
               }
               setPokes(pokes.concat(poke))
               nextId.current += 1
            } else {
               return
            }
         }
      },
      [pokes]
   )

   const onRemove = useCallback(
      (id) => {
         const removedItme = pokes.filter((poke) => poke.id !== id)
         setPokes(removedItme)
         return
      },
      [pokes]
   )

   const onToggle = useCallback(
      (id) => {
         const toggleTodos = pokes.map((poke) => (poke.id === id ? { ...poke, checked: !poke.checked } : poke))
         setPokes(toggleTodos)
         return
      },
      [pokes]
   )

   const onEvolution = useCallback(
      (id) => {
         const findNext = pokes.filter((poke) => poke.id === id)
         const nextPoke = onInsert(findNext[0].name, 'up')
         const evolution = pokes.map((poke) => (poke.id === id ? { ...poke, ...nextPoke } : poke))
         setPokes(evolution)
         return
      },
      [pokes]
   )

   return (
      <div>
         <header>
            <h1>
               <div className="titelicon">
                  <TbWorldSearch />
               </div>
               포켓몬 도감
               <div className="subtag">1세대</div>
            </h1>
         </header>
         <main className="container">
            <Template>
               <Insert onInsert={onInsert}></Insert>
               <List pokes={pokes} onRemove={onRemove} onToggle={onToggle} onEvolution={onEvolution}></List>
            </Template>
         </main>
      </div>
   )
}

export default App
