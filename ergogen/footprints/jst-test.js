module.exports = {
    params: {
        pos: { type: 'net', value: 'pos' },
        neg: { type: 'net', value: 'neg' },
    },
    body: p => `
        (footprint "Connector_JST:JST_PH_S2B-PH-K_1x02_P2.00mm_Horizontal"
            ${p.at}
            (descr "JST PH series connector, S2B-PH-K (http://www.jst-mfg.com/product/pdf/eng/ePH.pdf), generated with kicad-footprint-generator")
            (tags "connector JST PH top entry")
            (attr through_hole)
            (fp_text reference "${p.ref}" (at 1 -2.55 ${p.rot}) (layer "F.SilkS") ${p.ref_hide}
                (effects (font (size 1 1) (thickness 0.15)))
            )
            (fp_text user "+" (at 0 1.5 ${p.rot}) (layer F.SilkS)
                (effects (font (size 1 1) (thickness 0.15)))
            )
            (fp_text user "+" (at 0 1.5 ${p.rot}) (layer B.SilkS)
                (effects (font (size 1 1) (thickness 0.15)))
            )
            (fp_text user "-" (at 2 1.5 ${p.rot}) (layer F.SilkS)
                (effects (font (size 1 1) (thickness 0.15)))
            )
            (fp_text user "-" (at 2 1.5 ${p.rot}) (layer B.SilkS)
                (effects (font (size 1 1) (thickness 0.15)))
            )
            (fp_text user "-" (at -2 1.5 ${p.rot}) (layer F.SilkS)
                (effects (font (size 1 1) (thickness 0.15)))
            )
            (fp_text user "-" (at -2 1.5 ${p.rot}) (layer B.SilkS)
                (effects (font (size 1 1) (thickness 0.15)))
            )
            
            (fp_text value "" (at 1 7.45 ${p.rot}) (layer "F.Fab") hide
                (effects (font (size 1 1) (thickness 0.15)))
            )
            (pad "1" thru_hole roundrect (at 0 0 ${p.rot}) (size 1.2 1.75) (drill 0.75) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.208333) ${p.pos.str})
            (pad "2" thru_hole oval (at 2 0 ${p.rot}) (size 1.2 1.75) (drill 0.75) (layers "*.Cu" "*.Mask") ${p.neg.str})
            (pad "3" thru_hole oval (at -2 0 ${p.rot}) (size 1.2 1.75) (drill 0.75) (layers "*.Cu" "*.Mask") ${p.neg.str})
        )
    `
}
