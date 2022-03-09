import Image from "next/image";
import { RichText } from "prismic-reactjs";
import React, { FC } from "react";
import ReactPlayer from "react-player";
import { HomeProps } from "../../interfaces";

import styles from "./Home.module.scss";

// data from prismic.io returns the image src as an absolute url, so no need to set up the full url on loader....
const prismicLoader = (data: any) => {
  return `${data.src}?w=${data.width}&q=${data.quality || 75}`;
};

const Home: FC<HomeProps> = (props) => (
  <div>
    {props.results.map((item) => (
      <article key={item.id}>
        {item.data.body.map((body: any) => (
          <>
            {/* Main homepage banner */}
            <div className="row" key={body.slice_type["full_width_banner"]}>
              <div>
                {body.slice_type === "full_width_banner" && (
                  <div key={body.slice_type}>
                    <Image
                      loader={prismicLoader}
                      src={body.primary.FullWidthBanner.url}
                      alt={body.primary.FullWidthBanner.alt}
                      width={body.primary.FullWidthBanner.dimensions.width}
                      height={body.primary.FullWidthBanner.dimensions.height}
                    />
                  </div>
                )}
              </div>
            </div>
            {/* Center logo with introductory text */}
            <div key={body.slice_type["center_content_block"]}>
              <div>
                {body.slice_type === "center_content_block" && (
                  <div key={body.slice_type}>
                    <div className={styles.customContainer}>
                      <div className={styles.rowBlockvlg}>
                        <div className={styles.blockvsm}>
                          <Image
                            className={styles.logoStyles}
                            loader={prismicLoader}
                            src={body.primary.CenterContentBlockImg.url}
                            alt={body.primary.CenterContentBlockImg.alt}
                            width={
                              body.primary.CenterContentBlockImg.dimensions
                                .width
                            }
                            height={
                              body.primary.CenterContentBlockImg.dimensions
                                .height
                            }
                          />
                          <RichText render={body.primary.CenterContentTitle} />
                          <div className={styles.textLgh2}>
                            <RichText
                              render={body.primary.CenterContentSubTitle}
                            />
                            <div className="py-5">
                              <div className={styles.pageBreakLine}></div>
                            </div>
                            <RichText render={body.primary.CenterContentText} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Yellow banner with right text */}
            <div className="row" key={body.slice_type["banner_text_right"]}>
              <div>
                {body.slice_type === "banner_text_right" && (
                  <div key={body.slice_type}>
                    <div className="row">
                      <Image
                        loader={prismicLoader}
                        src={body.primary.BannerTextRightBg.url}
                        alt={body.primary.BannerTextRightBg.alt}
                        width={body.primary.BannerTextRightBg.dimensions.width}
                        height={
                          body.primary.BannerTextRightBg.dimensions.height
                        }
                      />

                      <div className={styles.textDescriptionBanner}>
                        <div className={styles.textDescInner}>
                          <RichText
                            render={body.primary.BannerTextRightTitle}
                          />
                          <RichText
                            render={body.primary.BannerTextRightDesc1}
                          />
                          <RichText
                            render={body.primary.BannerTextRightDesc2}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* add video embed */}
            <div className="row" key={body.slice_type["embed_video"]}>
              <div>
                {body.slice_type === "embed_video" && (
                  <div key={body.slice_type}>
                    <div className="row">
                      <div className="d-flex justify-content-center py-5">
                        <ReactPlayer url={body.primary.EmbedVideo.embed_url} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Grey banner with left text */}
            <div className="row" key={body.slice_type["banner_text_left"]}>
              <div>
                {body.slice_type === "banner_text_left" && (
                  <div key={body.slice_type}>
                    <div className="row">
                      <Image
                        loader={prismicLoader}
                        src={body.primary.BannerTextLeftBg.url}
                        alt={body.primary.BannerTextLeftBg.alt}
                        width={body.primary.BannerTextLeftBg.dimensions.width}
                        height={body.primary.BannerTextLeftBg.dimensions.height}
                      />

                      <div className={styles.textDescriptionLeftBanner}>
                        <div className={styles.textDescInner}>
                          <RichText render={body.primary.BannerTextLeftTitle} />
                          <RichText render={body.primary.BannerTextLeftDesc} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Center img with text and quote */}
            <div key={body.slice_type["logo_w_quote"]}>
              <div>
                {body.slice_type === "logo_w_quote" && (
                  <div key={body.slice_type}>
                    <div className={styles.customContainer}>
                      <div className={styles.rowBlockvlg}>
                        <div className={styles.blockvsm}>
                          <Image
                            className={styles.quoteImgStyles}
                            loader={prismicLoader}
                            src={body.primary.LogoWQuoteBg.url}
                            alt={body.primary.LogoWQuoteBg.alt}
                            width={body.primary.LogoWQuoteBg.dimensions.width}
                            height={body.primary.LogoWQuoteBg.dimensions.height}
                          />
                          <div className="d-flex justify-content-center">
                            <div className={styles.blockquote}>
                              <div className={styles.quoteTextStyles}>
                                <RichText
                                  render={body.primary.LogoWQuoteQuote}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-center">
                            <div className={styles.smlText}>
                              <RichText
                                render={body.primary.LogoWQuoteAuthor}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/*Banner with right text and quote */}
            <div
              className="row"
              key={body.slice_type["img_text_right_w_quote"]}
            >
              <div>
                {body.slice_type === "img_text_right_w_quote" && (
                  <div key={body.slice_type}>
                    <div className="row">
                      <Image
                        loader={prismicLoader}
                        src={body.primary.ImgTextRightWQuoteBg.url}
                        alt={body.primary.ImgTextRightWQuoteBg.alt}
                        width={
                          body.primary.ImgTextRightWQuoteBg.dimensions.width
                        }
                        height={
                          body.primary.ImgTextRightWQuoteBg.dimensions.height
                        }
                      />

                      <div className={styles.textDescriptionBanner}>
                        <div className={styles.textDescInner}>
                          <RichText
                            render={body.primary.ImgTextRightWQuoteTitle}
                          />
                          <RichText
                            render={body.primary.ImgTextRightWQuoteDesc}
                          />

                          <div className="d-flex justify-content-center">
                            <div className={styles.blockquote}>
                              <div className={styles.quoteTextStyles}>
                                <RichText
                                  render={body.primary.ImgTextRightWQuoteh3}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Left Text with Img Right */}
            <div className="row" key={body.slice_type["img_w_info_container"]}>
              <div>
                {body.slice_type === "img_w_info_container" && (
                  <div key={body.slice_type}>
                    <div className={styles.customContainer2}>
                      <div className={styles.textDescriptionLeftBanner}>
                        <div className={styles.textDescInnerLeft}>
                          <RichText
                            render={body.primary.ImgWInfoContainerTitle}
                          />
                          <RichText
                            render={body.primary.ImgWInfoContainerDesc}
                          />
                        </div>
                      </div>
                      <div className={styles.imgInnerRightContainer}>
                        <Image
                          className={styles.imgInnerRight}
                          loader={prismicLoader}
                          src={body.primary.ImgWInfoContainerRightImg.url}
                          alt={body.primary.ImgWInfoContainerRightImg.alt}
                          width={
                            body.primary.ImgWInfoContainerRightImg.dimensions
                              .width
                          }
                          height={
                            body.primary.ImgWInfoContainerRightImg.dimensions
                              .height
                          }
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Center Quote */}
            <div key={body.slice_type["center_quote"]}>
              <div>
                {body.slice_type === "center_quote" && (
                  <div key={body.slice_type}>
                    <div className="d-flex justify-content-center mb-5">
                      <div className={styles.blockquote}>
                        <div className={styles.quoteTextStylesLong}>
                          <RichText render={body.primary.CenterQuoteh3} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Call to action banner */}
            <div key={body.slice_type["call_to_action"]}>
              <div>
                {body.slice_type === "call_to_action" && (
                  <div key={body.slice_type}>
                    <div className={styles.customColourRow}>
                      <div className="col-12 py-5">
                        <div className="d-flex justify-content-center py-2">
                          <div className={styles.xxlTitle}>
                            <RichText render={body.primary.CallToActionTitle} />
                          </div>
                        </div>
                        <div className="d-flex justify-content-center py-2">
                          <a
                            className="btn btn-customBlue"
                            href={body.primary.CallToActionBtn}
                            role="button"
                          >
                            Sign Up Free
                          </a>
                        </div>
                        <div className="d-flex justify-content-center py-2">
                          <a href="mailto:demo@edapp.com">
                            <RichText render={body.primary.CallToActionText} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Why EdApp */}
            <div key={body.slice_type["grid_three_blocks"]}>
              <div>
                {body.slice_type === "grid_three_blocks" && (
                  <div key={body.slice_type}>
                    <div className={styles.customContainer}>
                      <div className={styles.rowBlockvlg}>
                        <div className={styles.blockvsm}>
                          <RichText render={body.primary.gridTitle} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        ))}
      </article>
    ))}
  </div>
);

export default Home;
