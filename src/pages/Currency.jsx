import React, { useEffect, useState } from "react";
import axios from "axios";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { useParams } from 'react-router-dom';

import styles from "./styles/currency.module.scss";

const Currency = () => {
  const [currency, setCurrency] = useState({});
  const params = useParams()

  const url =
    `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;

  useEffect(() => {
    async function axiosCoins() {
      try {
        const response = await axios.get(url);
        setCurrency(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    axiosCoins();
  }, [url]);

  return (
    <div className={styles.currency__page}>
      <div className={styles.currency}>
        <img className={styles.img} src={currency.image?.large} alt='/' />
        <div className={styles.header}>
          <h1 className={styles.title}>{currency?.name} price</h1>
          <p>({currency.symbol?.toUpperCase()} / USD)</p>
        </div>
      </div>

      <div className={styles.sparkline__wrapper}>
        <div className={styles.sparkline}>
          <div className={styles.sparkline__title}>
            {currency.market_data?.current_price ? (
              <p className={styles.sparkline__price}>
                ${currency.market_data.current_price.usd.toLocaleString()}
              </p>
            ) : null}
            <p>7 Day</p>
          </div>
          <div>
            <Sparklines data={currency.market_data?.sparkline_7d.price}>
              <SparklinesLine color='teal' />
            </Sparklines>
          </div>
        </div>
        <div className={styles.stats}>
          <div>
            <h2>Market Cap</h2>
            {currency.market_data?.market_cap ? (
              <p>${currency.market_data.market_cap.usd.toLocaleString()}</p>
            ) : null}
          </div>
          <div>
            <h2>Volume (24h)</h2>
            {currency.market_data?.market_cap ? (
              <p>{currency.market_data.total_volume.usd.toLocaleString()}</p>
            ) : null}
          </div>
          <div>
            <div>
              <h2>24h High</h2>
              {currency.market_data?.high_24h ? (
                <p>{currency.market_data.high_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>
          <div>
            <div>
              <h2>24h Low</h2>
              {currency.market_data?.low_24h ? (
                <p>{currency.market_data.low_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.detailed}>
        <h3 className={styles.detailed__title}>Market Stats</h3>
        <div className={styles.grid__container}>
          <div className={styles.market__sum}>
            <div>
              <h4 className={styles.subtitle}>Market Rank</h4>
              {currency.market_cap_rank}
            </div>
            <div>
              <h4 className={styles.subtitle}>Hashing Algorithm</h4>
              {currency.hashing_algorithm ? (
                <p>{currency.hashing_algorithm}</p>
              ) : null}
            </div>
            <div>
              <h4 className={styles.subtitle}>Trust Score</h4>
              {currency.tickers ? (
                <p>{currency.liquidity_score.toFixed(2)}</p>
              ) : null}
            </div>
          </div>
          <div className={styles.market__persentage_1}>
            <div>
              <p className={styles.subtitle}>Price Change (24h)</p>
              {currency.market_data ? (
                currency.market_data.price_change_percentage_24h > 0 ? (
                  <p className={styles.green}>
                    {currency.market_data.price_change_percentage_24h.toFixed(
                      2
                    )}
                    %
                  </p>
                ) : (
                  <p className={styles.red}>
                    {currency.market_data.price_change_percentage_24h.toFixed(
                      2
                    )}
                    %
                  </p>
                )
              ) : null}
            </div>
            <div>
              <p className={styles.subtitle}>Price Change (7d)</p>
              {currency.market_data ? (
                <div>
                  {currency.market_data ? (
                    currency.market_data.price_change_percentage_7d > 0 ? (
                      <p className={styles.green}>
                        {currency.market_data.price_change_percentage_7d.toFixed(
                          2
                        )}
                        %
                      </p>
                    ) : (
                      <p className={styles.red}>
                        {currency.market_data.price_change_percentage_7d.toFixed(
                          2
                        )}
                        %
                      </p>
                    )
                  ) : null}
                </div>
              ) : null}
            </div>
            <div>
              <p className={styles.subtitle}>Price Change (14d)</p>
              {currency.market_data ? (
                <div>
                  {currency.market_data ? (
                    currency.market_data.price_change_percentage_14d > 0 ? (
                      <p className={styles.green}>
                        {currency.market_data.price_change_percentage_14d.toFixed(
                          2
                        )}
                        %
                      </p>
                    ) : (
                      <p className={styles.red}>
                        {currency.market_data.price_change_percentage_14d.toFixed(
                          2
                        )}
                        %
                      </p>
                    )
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
          <div className={styles.market__persentage_2}>
            <div>
              <p className={styles.subtitle}>Price Change (30d)</p>
              {currency.market_data ? (
                currency.market_data.price_change_percentage_30d > 0 ? (
                  <p className={styles.green}>
                    {currency.market_data.price_change_percentage_30d.toFixed(
                      2
                    )}
                    %
                  </p>
                ) : (
                  <p className={styles.red}>
                    {currency.market_data.price_change_percentage_30d.toFixed(
                      2
                    )}
                    %
                  </p>
                )
              ) : null}
            </div>
            <div>
              <p className={styles.subtitle}>Price Change (60d)</p>
              {currency.market_data ? (
                <div>
                  {currency.market_data ? (
                    currency.market_data.price_change_percentage_60d > 0 ? (
                      <p className={styles.green}>
                        {currency.market_data.price_change_percentage_60d.toFixed(
                          2
                        )}
                        %
                      </p>
                    ) : (
                      <p className={styles.red}>
                        {currency.market_data.price_change_percentage_60d.toFixed(
                          2
                        )}
                        %
                      </p>
                    )
                  ) : null}
                </div>
              ) : null}
            </div>
            <div>
              <p className={styles.subtitle}>Price Change (1y)</p>
              {currency.market_data ? (
                <div>
                  {currency.market_data ? (
                    currency.market_data.price_change_percentage_1y > 0 ? (
                      <p className={styles.green}>
                        {currency.market_data.price_change_percentage_1y.toFixed(
                          2
                        )}
                        %
                      </p>
                    ) : (
                      <p className={styles.red}>
                        {currency.market_data.price_change_percentage_1y.toFixed(
                          2
                        )}
                        %
                      </p>
                    )
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currency;
