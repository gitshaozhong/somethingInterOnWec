import { View, Text, Input, ScrollView } from "@tarojs/components";
import { useState, useMemo } from "react";
import Taro from "@tarojs/taro";
import { HOT_CITIES, buildCityIndex, ALL_CITIES, CITY_INDEX_LETTERS } from "../../config/cities";
import "./city-picker.scss";

export default function CityPicker() {
  const [keyword, setKeyword] = useState("");
  const [activeLetter, setActiveLetter] = useState<string>("");
  const [scrollIntoViewId, setScrollIntoView] = useState("");

  // 按字母分组的城市索引（缓存计算）
  const cityIndex = useMemo(() => buildCityIndex(), []);
  // 字母 → 该分组在 ScrollView 中的 sectionId（用于滚动定位）
  const letterToSectionId = useMemo(() => {
    const map: Record<string, string> = {};
    for (const g of cityIndex) {
      map[g.letter] = `section-${g.letter}`;
    }
    return map;
  }, [cityIndex]);

  // 搜索结果
  const searchResults = useMemo(() => {
    const trimmed = keyword.trim();
    if (!trimmed) return [];
    return ALL_CITIES.filter((c) => c.includes(trimmed));
  }, [keyword]);

  // 点击城市：通过 eventChannel 回传给上一页并返回
  const handleSelect = (city: string) => {
    const pages = Taro.getCurrentPages();
    const currPage = pages[pages.length - 1] as any;
    const eventChannel = currPage?.getOpenerEventChannel?.();
    if (eventChannel) {
      eventChannel.emit("onCitySelected", city);
    }
    Taro.navigateBack();
  };

  // 点击右侧字母索引：滚动到对应分组
  const handleLetterClick = (letter: string) => {
    setActiveLetter(letter);
    const sectionId = letterToSectionId[letter];
    if (sectionId) {
      // 触发 ScrollView 的 scroll-into-view（同一字母重复点击需重置后再设值）
      setScrollIntoView("");
      setTimeout(() => setScrollIntoView(sectionId), 0);
    }
    // 顶部字母浮层 600ms 后消失
    setTimeout(() => setActiveLetter(""), 600);
  };

  const hasKeyword = keyword.trim().length > 0;
  // 实际存在城市的字母（用于索引条渲染）
  const activeLetters = CITY_INDEX_LETTERS.filter((l) => letterToSectionId[l]);

  return (
    <View className="page-city-picker">
      {/* 顶部搜索栏 */}
      <View className="search-bar">
        <View className="search-input-wrap">
          <Text className="search-icon">🔍</Text>
          <Input
            className="search-input"
            placeholder="输入城市名搜索"
            value={keyword}
            onInput={(e) => setKeyword(e.detail.value)}
            confirmType="search"
          />
          {keyword && (
            <Text className="clear-btn" onClick={() => setKeyword("")}>✕</Text>
          )}
        </View>
      </View>

      {/* 主体：搜索时显示结果，否则显示热门+A-Z索引 */}
      {hasKeyword ? (
        <ScrollView className="city-scroll search-mode" scrollY>
          {searchResults.length === 0 ? (
            <View className="empty-tip">
              <Text className="empty-icon">🏙️</Text>
              <Text className="empty-text">未找到相关城市</Text>
            </View>
          ) : (
            searchResults.map((city) => (
              <View
                key={city}
                className="city-item"
                onClick={() => handleSelect(city)}
              >
                <Text className="city-name">{city}</Text>
                <Text className="city-arrow">›</Text>
              </View>
            ))
          )}
        </ScrollView>
      ) : (
        <View className="city-body">
          <ScrollView
            className="city-scroll"
            scrollY
            scrollIntoView={scrollIntoViewId}
            scrollWithAnimation
          >
            {/* 热门城市 */}
            <View className="hot-section" id="section-hot">
              <Text className="section-title">热门城市</Text>
              <View className="hot-grid">
                {HOT_CITIES.map((city) => (
                  <View
                    key={city}
                    className="hot-chip"
                    onClick={() => handleSelect(city)}
                  >
                    <Text>{city}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* A-Z 分组列表 */}
            {cityIndex.map((group) => (
              <View
                key={group.letter}
                id={`section-${group.letter}`}
                className="letter-section"
              >
                <View className="letter-header">
                  <Text className="letter-text">{group.letter}</Text>
                </View>
                {group.cities.map((city) => (
                  <View
                    key={city}
                    className="city-item"
                    onClick={() => handleSelect(city)}
                  >
                    <Text className="city-name">{city}</Text>
                    <Text className="city-arrow">›</Text>
                  </View>
                ))}
              </View>
            ))}
          </ScrollView>

          {/* 右侧 A-Z 索引条 */}
          <View className="index-bar">
            {activeLetters.map((letter) => (
              <View
                key={letter}
                className={`index-letter ${activeLetter === letter ? "active" : ""}`}
                onClick={() => handleLetterClick(letter)}
              >
                <Text>{letter}</Text>
              </View>
            ))}
          </View>

          {/* 字母点击浮层 */}
          {activeLetter && (
            <View className="letter-overlay">
              <Text>{activeLetter}</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
}
