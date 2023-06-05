import React from 'react'
import {MapMarker, Map, EventMarkerContainer,useMap} from 'react-kakao-maps-sdk'
import { useState } from 'react'
const App2 = () => {
    const data = [
       
        
        {
          content: <div style={{ color: "#000" }}>스마트인재개발원</div>,
          latlng: { lat: 35.1107, lng: 126.8778 },
        },
      ]

    const EventMarkerContainer = ({ position, content }) => {
        const map = useMap()
        const [isVisible, setIsVisible] = useState(false)
    
        return (
          <MapMarker
            position={position} // 마커를 표시할 위치
            // @ts-ignore
            onClick={(marker) => map.panTo(marker.getPosition())}
            onMouseOver={() => setIsVisible(true)}
            onMouseOut={() => setIsVisible(false)}
          >
            {isVisible && content}
          </MapMarker>
        )
      }
    
  return (
    <div>
        <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: 35.1107,
        lng: 126.8778,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "450px",
      }}
      level={3} // 지도의 확대 레벨
    >
      {data.map((value) => (
        <EventMarkerContainer
          key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
          position={value.latlng}
          content={value.content}
        />
      ))}
    </Map>
    </div>
  )
}

export default App2