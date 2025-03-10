import React from 'react'

import { cn } from '@/lib/utils'

interface DisclaimerContentProps {
  isHideHeader?: boolean
}

export const DisclaimerContent = ({
  isHideHeader = false,
}: DisclaimerContentProps) => {
  return (
    <>
      {isHideHeader ? null : (
        <div className="flex items-center justify-between" data-oid="9yent3b">
          <div className="space-y-1" data-oid="gmof0_e">
            <h2
              className="text-2xl font-semibold tracking-tight"
              data-oid="etttc.o"
            >
              Disclaimer
            </h2>
            <p className="text-sm text-muted-foreground" data-oid="nwb837g">
              Please read this disclaimer carefully before using the service
              operated by us.
            </p>
          </div>
        </div>
      )}
      <div
        className={cn(
          'flex flex-col items-center gap-4',
          isHideHeader ? '' : 'my-4'
        )}
        data-oid="njz.c7r"
      >
        <p className="text-base text-muted-foreground" data-oid="8353cor">
          Reely.site is a free online movie and TV show streaming website that
          allows users to watch content sourced from third parties. Reely.site
          does not upload, host, own or store any movies, TV shows or video
          content displayed on the site. All content is provided by external
          sources and streamed directly from third party servers.
        </p>
        <p className="text-base text-muted-foreground" data-oid="efmetg9">
          Reely.site has no control over the content quality, availability,
          copyright, legality or validity of the third party material viewed via
          the site. Reely.site cannot be held responsible for any streaming
          content on the site, whether authorized or unauthorized. Users are
          responsible for verifying they have the legal right to view any
          streamed content.
        </p>
        <p className="text-base text-muted-foreground" data-oid="39l:5ec">
          The operators of Reely.site make no warranties or representations
          about the site or any of the content, and assume no liability for any
          costs, damages or losses from the use of the site. By using
          Reely.site, you agree that access is provided “as is” at your own
          risk.
        </p>
        <div className="text-base text-muted-foreground" data-oid="3i-79h9">
          <p data-oid="dojy63c">Copyright Infringement:</p>
          Reely.site respects the intellectual property rights of others. Users
          are prohibited from using Reely.site to engage in copyright
          infringement or the unauthorized distribution of copyrighted content.
          Reely.site will promptly remove or disable access to any infringing
          content upon receipt of proper notification from the copyright holder.
        </div>
        <div className="text-base text-muted-foreground" data-oid="qrbe2s5">
          <p data-oid="i9dk7_2">No Endorsement:</p>
          <p data-oid="u8zfpof">
            The content accessible through Reely.site does not constitute an
            endorsement by the website operators of any third party content
            providers, services, or products. References and links to third
            party content are provided for informational and entertainment
            purposes only.
          </p>
        </div>
        <div className="text-base text-muted-foreground" data-oid="ufmet02">
          <p data-oid="r:.uigz">Age Restricted Content:</p>
          <p data-oid="ni0wndy">
            Reely.site does not knowingly collect or distribute content
            considered obscene or harmful to minors as defined by applicable
            law. However, Reely.site has no control over third party content and
            some material accessible through Reely.site may be inappropriate for
            minors. Parents are advised to supervise minors using the service.
          </p>
        </div>
        <div className="text-base text-muted-foreground" data-oid="chznpwy">
          <p data-oid="y_.7ls5">No Warranties:</p>
          <p data-oid="9-7:equ">
            Reely.site provides access to third party content on an “as is”
            basis without warranties of any kind, express or implied. The
            website operators make no guarantees regarding the accuracy,
            currency, suitability, completeness, usefulness, safety or
            intellectual property rights related to any accessible content.
          </p>
        </div>
        <div className="text-base text-muted-foreground" data-oid="5:4n5bc">
          <p data-oid="r47w-gw">Limitation of Liability:</p>
          <p data-oid="5uj:713">
            In no event shall Reely.site be liable for any direct, indirect,
            punitive, incidental or consequential damages arising out of the
            use, inability to use, or unavailability of the service or any
            content accessible on the site. Users agree to fully indemnify and
            hold harmless Reely.site and its operators from any claims arising
            from use of the service.
          </p>
        </div>
      </div>
    </>
  )
}
